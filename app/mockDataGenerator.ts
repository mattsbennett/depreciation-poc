import { PolynomialRegression } from "ml-regression-polynomial";
import { std } from "mathjs";

function getRandomPrice(date: Date, avg: number, skew: number): number {
  const year = date.getFullYear();
  let adjustedAvg;

  if (year === 2019) {
    adjustedAvg = avg * 1;
  } else if (year === 2020) {
    adjustedAvg = avg * 1.1;
  } else if (year === 2021) {
    adjustedAvg = avg * 1.25;
  } else if (year === 2022) {
    adjustedAvg = avg * 1.2;
  } else if (year === 2023) {
    adjustedAvg = avg * 1.18;
  } else if (year === 2024) {
    adjustedAvg = avg * 1.2;
  } else {
    adjustedAvg = avg;
  }

  const range = 10000; // Tighter range around the average
  // Skew less than 1 to concentrate values around the average
  let price = adjustedAvg + (Math.pow(Math.random(), skew) - 0.5) * range * 2;
  return Math.round(price);
}

function getRandomDate(start: Date, end: Date): Date {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function getRandomModelYear(min: number, max:number, price: number, targetAvgPrice: number): number {
  const skew = price > targetAvgPrice ? 0.4 : 1.7; // Skew towards higher years if price > avgPrice

  const yearRange = max - min + 1;
  let modelYear =
    min + Math.floor(Math.pow(Math.random(), skew) * yearRange);
  return modelYear;
}

export interface NivoDataset {
  id: string;
  data: { x: Date; y: number }[];
}

export interface ChartJsDataset {
  label: string;
  data: { x: Date; y: number }[];
  pointRadius?: number
  pointHoverRadius?: number
  type?: string
  borderWidth?: number
  fill?: boolean|number|string
}

export interface VegaLiteDataset {
  date: Date;
  price: number;
  modelYear: number;
}

export interface PlotlyDataset {
  x: Date[];
  y: number[];
  name: string;
  type: string;
  mode: string;
  marker: {
    size: number;
  };
}

export function getVegaLiteData(
  numRecords = 1000,
  priceSkew = 0.7,
  minModelYear = 2016,
  maxModelYear = 2020,
  targetAvgPrice = 18000,
  minDate = new Date("2020-01-01"),
  maxDate = new Date("2024-01-01"),
) {
  const dataset: VegaLiteDataset[] = [];

  for (let i = 0; i < numRecords; i++) {
    const date = getRandomDate(minDate, maxDate);
    const price = getRandomPrice(date, targetAvgPrice, priceSkew);
    const record = {
      date: date,
      price: price,
      modelYear: getRandomModelYear(minModelYear, maxModelYear, price, targetAvgPrice)
    };

    dataset.push(record);
  }

  dataset.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return dataset;
}

export function getPlotlyData(
  numRecords = 1000,
  polyDegree = 3,
  priceSkew = 0.7,
  minModelYear = 2016,
  maxModelYear = 2020,
  targetAvgPrice = 18000,
  minDate = new Date("2020-01-01"),
  maxDate = new Date("2024-01-01"),
): PlotlyDataset[] {
  const datasets = new Map();
  const dates = Array<Date>();
  const prices = Array<number>();

  for (let i = minModelYear; i <= maxModelYear; i++) {
    datasets.set(i, {
      x: [],
      y: [],
      name: i,
      type: "scattergl",
      mode: "markers",
      marker: {
        size: 10
      }
    });
  }

  for (let i = 0; i < numRecords; i++) {
    const date = getRandomDate(minDate, maxDate);
    const price = getRandomPrice(date, targetAvgPrice, priceSkew);
    const modelYear = getRandomModelYear(minModelYear, maxModelYear, price, targetAvgPrice);

    datasets.get(modelYear).x.push(date);
    datasets.get(modelYear).y.push(price);
    dates.push(date);
    prices.push(price);
  }

  // Sort the dates and prices together
  const combined = dates.map((date, index) => ({
    date,
    price: prices[index]
  }));
  combined.sort(
    (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()
  );

  const sortedDates = combined.map(item => item.date);
  const sortedPrices = combined.map(item => item.price);

  // Calculate the mean of all the y data
  const meanPrice =
    prices.reduce((sum, price) => sum + price, 0) / prices.length;

  // Create an array for the mean line
  const meanPrices = Array(dates.length).fill(meanPrice);

  // Calculate the error (example with dummy data)
  const error = std(sortedPrices, "biased"); // Example: 10% error

  const upperBound = meanPrices.map(mean => mean + error);
  //@ts-ignore
  const lowerBound = meanPrices.map(mean => mean - error);

  // Convert date strings to numerical values for regression
  const xNumerical = sortedDates.map(date => new Date(date).getTime());

  // Perform polynomial regression
  const regression = new PolynomialRegression(xNumerical, sortedPrices, polyDegree);

  // Generate polynomial curve
  const polynomialX = [];
  const polynomialY = [];
  const minX = Math.min(...xNumerical);
  const maxX = Math.max(...xNumerical);
  const step = (maxX - minX) / 100;

  for (let x = minX; x <= maxX; x += step) {
    const y = regression.predict(x);
    polynomialX.push(new Date(x).toISOString().split("T")[0]);
    polynomialY.push(y);
  }

  datasets.set("mean", {
    x: dates,
    y: meanPrices,
    mode: "lines",
    name: "Mean Price",
    legendgroup: "Mean Price (± stddev)",
    showlegend: false,
    hoverinfo: "skip",
    line: {
      color: "rgb(0, 130, 255)",
      width: 2
    }
  });

  datasets.set("errorband", {
    x: [...sortedDates, ...sortedDates.slice().reverse()],
    y: [...upperBound, ...lowerBound.slice().reverse()],
    fill: "toself",
    fillcolor: "rgba(0, 130, 255,0.4)",
    hoverinfo: "skip",
    line: {
      color: "transparent"
    },
    name: "Mean Price (± stddev)",
    legendgroup: "Mean Price (± stddev)"
  });

  // Polynomial regression trace
  datasets.set("polynomial", {
    x: polynomialX,
    y: polynomialY,
    mode: "lines",
    name: "Polynomial Regression",
    hoverinfo: "skip",
    line: {
      color: "red",
      width: 4
    }
  });

  return Array.from(datasets.values());
}

export function getChartJsData(
  numRecords = 1000,
  polyDegree = 3,
  priceSkew = 0.7,
  minModelYear = 2016,
  maxModelYear = 2020,
  targetAvgPrice = 18000,
  minDate = new Date("2020-01-01"),
  maxDate = new Date("2024-01-01"),
): ChartJsDataset[] {
  const datasets = new Map();
  const dates = Array<Date>();
  const prices = Array<number>();

  for (let i = minModelYear; i <= maxModelYear; i++) {
    datasets.set(i, {
      data: [],
      label: i,
      pointRadius: 5,
      pointHoverRadius: 5
    });
  }

  for (let i = 0; i < numRecords; i++) {
    const date = getRandomDate(minDate, maxDate);
    const price = getRandomPrice(date, targetAvgPrice, priceSkew);
    const modelYear = getRandomModelYear(minModelYear, maxModelYear, price, targetAvgPrice);

    datasets.get(modelYear).data.push({ x: date, y: price });
    dates.push(date);
    prices.push(price);
  }

  // Sort the dates and prices together
  const combined = dates.map((date, index) => ({
    date,
    price: prices[index]
  }));
  combined.sort(
    (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()
  );

  const sortedDates = combined.map(item => item.date);
  const sortedPrices = combined.map(item => item.price);

  // Calculate the mean of all the y data
  const meanPrice =
    prices.reduce((sum, price) => sum + price, 0) / prices.length;

  // Calculate the error (example with dummy data)
  const error = parseInt(std(sortedPrices, "biased").toString(), 10); // Example: 10% error

  // Convert date strings to numerical values for regression
  const xNumerical = sortedDates.map(date => new Date(date).getTime());

  // Perform polynomial regression
  const regression = new PolynomialRegression(xNumerical, sortedPrices, polyDegree);

  // Generate polynomial curve
  const minX = Math.min(...xNumerical);
  const maxX = Math.max(...xNumerical);
  const step = (maxX - minX) / 100;
  const polynomialPoints = [];
  const meanPoints = [];
  const upperBoundPoints = [];
  const lowerBoundPoints = [];

  for (let x = minX; x <= maxX; x += step) {
    meanPoints.push({
      x: new Date(x).toISOString().split("T")[0],
      y: meanPrice
    });
    upperBoundPoints.push({
      x: new Date(x).toISOString().split("T")[0],
      y: meanPrice + error
    });
    lowerBoundPoints.push({
      x: new Date(x).toISOString().split("T")[0],
      y: meanPrice - error
    });
    polynomialPoints.push({
      x: new Date(x).toISOString().split("T")[0],
      y: regression.predict(x)
    });
  }

  datasets.set("poly", {
    data: polynomialPoints,
    label: "Polynomial Regression",
    pointRadius: 0,
    type: "line"
  });

  datasets.set("mean", {
    data: meanPoints,
    label: "Mean",
    pointRadius: 0,
    type: "line"
  });

  datasets.set("upper", {
    borderWidth: 0,
    data: upperBoundPoints,
    label: "",
    pointRadius: 0,
    type: "line",
    fill: false
  });

  datasets.set("lower", {
    // Once you set a backgroundColor on one dataset, you have to manually set it on all datasets
    // backgroundColor: "rgba(54, 151, 227, 0.3)",
    borderWidth: 0,
    data: lowerBoundPoints,
    label: "Std Dev",
    pointRadius: 0,
    type: "line",
    fill: "-1"
  });

  return Array.from(datasets.values());
}

export function getNivoData(
  numRecords = 1000,
  polyDegree = 3,
  priceSkew = 0.7,
  minModelYear = 2016,
  maxModelYear = 2020,
  targetAvgPrice = 18000,
  minDate = new Date("2020-01-01"),
  maxDate = new Date("2024-01-01"),
): NivoDataset[] {
  const datasets = new Map();
  const dates = Array<Date>();
  const prices = Array<number>();

  for (let i = minModelYear; i <= maxModelYear; i++) {
    datasets.set(i, {
      data: [],
      id: i,
    });
  }

  for (let i = 0; i < numRecords; i++) {
    const date = getRandomDate(minDate, maxDate);
    const price = getRandomPrice(date, targetAvgPrice, priceSkew);
    const modelYear = getRandomModelYear(minModelYear, maxModelYear, price, targetAvgPrice);

    datasets.get(modelYear).data.push({ x: date, y: price });
    dates.push(date);
    prices.push(price);
  }

  // Sort the dates and prices together
  const combined = dates.map((date, index) => ({
    date,
    price: prices[index]
  }));
  combined.sort(
    (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()
  );

  const sortedDates = combined.map(item => item.date);
  const sortedPrices = combined.map(item => item.price);

  // Calculate the mean of all the y data
  const meanPrice =
    prices.reduce((sum, price) => sum + price, 0) / prices.length;

  // Calculate the error (example with dummy data)
  const error = parseInt(std(sortedPrices, "biased").toString(), 10); // Example: 10% error

  // Convert date strings to numerical values for regression
  const xNumerical = sortedDates.map(date => new Date(date).getTime());

  // Perform polynomial regression
  const regression = new PolynomialRegression(xNumerical, sortedPrices, polyDegree);

  // Generate polynomial curve
  const minX = Math.min(...xNumerical);
  const maxX = Math.max(...xNumerical);
  const step = (maxX - minX) / 100;
  const polynomialPoints = [];
  const meanPoints = [];
  const upperBoundPoints = [];
  const lowerBoundPoints = [];

  for (let x = minX; x <= maxX; x += step) {
    meanPoints.push({
      x: new Date(x).toISOString().split("T")[0],
      y: meanPrice
    });
    upperBoundPoints.push({
      x: new Date(x).toISOString().split("T")[0],
      y: meanPrice + error
    });
    lowerBoundPoints.push({
      x: new Date(x).toISOString().split("T")[0],
      y: meanPrice - error
    });
    polynomialPoints.push({
      x: new Date(x).toISOString().split("T")[0],
      y: regression.predict(x)
    });
  }

  // datasets.set("poly", {
  //   data: polynomialPoints,
  //   label: "Polynomial Regression",
  //   pointRadius: 0,
  //   type: "line"
  // });

  // datasets.set("mean", {
  //   data: meanPoints,
  //   label: "Mean",
  //   pointRadius: 0,
  //   type: "line"
  // });

  // datasets.set("upper", {
  //   borderWidth: 0,
  //   data: upperBoundPoints,
  //   label: "",
  //   pointRadius: 0,
  //   type: "line",
  //   fill: false
  // });

  // datasets.set("lower", {
  //   // Once you set a backgroundColor on one dataset, you have to manually set it on all datasets
  //   // backgroundColor: "rgba(54, 151, 227, 0.3)",
  //   borderWidth: 0,
  //   data: lowerBoundPoints,
  //   label: "Std Dev",
  //   pointRadius: 0,
  //   type: "line",
  //   fill: "-1"
  // });

  return Array.from(datasets.values());
}