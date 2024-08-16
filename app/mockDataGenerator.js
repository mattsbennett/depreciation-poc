function getRandomPrice(date, min, max, avg) {
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
    const skew = 0.7; // Skew less than 1 to concentrate values around the average
    let price = adjustedAvg + (Math.pow(Math.random(), skew) - 0.5) * range * 2;
    return Math.round(price);
  }

  function getRandomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  function getRandomModelYear(price) {
    const avgPrice = 18000;
    const skew = price > avgPrice ? 0.5 : 1.5; // Skew towards higher years if price > avgPrice

    const yearRange = maxModelYear - minModelYear + 1;
    let modelYear =
      minModelYear + Math.floor(Math.pow(Math.random(), skew) * yearRange);
    return modelYear;
  }

  const startDate = new Date("2019-01-01");
  const endDate = new Date("2024-01-01");
  const minPrice = 10000;
  const maxPrice = 40000;
  const avgPrice = 18000;
  const numRecords = 1000;
  const minModelYear = 2015;
  const maxModelYear = 2020;
  const mode = "chartjs"; // "vega", "plotly" or "chartjs"
  let dataset;

  if (mode === "vega") {
    dataset = [];

    for (let i = 0; i < numRecords; i++) {
      const date = getRandomDate(startDate, endDate);
      const price = getRandomPrice(date, minPrice, maxPrice, avgPrice);
      const record = {
        date: date.toISOString().split("T")[0],
        price: price,
        modelYear: getRandomModelYear(price),
      };
      dataset.push(record);
    }
  } else if (mode === "plotly") {
    dataset = {};

    for (let i = 0; i < numRecords; i++) {
      const date = getRandomDate(startDate, endDate);
      const price = getRandomPrice(date, minPrice, maxPrice, avgPrice);
      const modelYear = getRandomModelYear(price);

      if (typeof dataset[modelYear] === "undefined") {
        dataset[modelYear] = {
          x: [],
          y: [],
          name: modelYear,
          type: "scatter",
        };
      }

      dataset[modelYear].x.push(date);
      dataset[modelYear].y.push(price);
    }
  } else if (mode === "chartjs") {
    dataset = {};

    for (let i = 0; i < numRecords; i++) {
      const date = getRandomDate(startDate, endDate);
      const price = getRandomPrice(date, minPrice, maxPrice, avgPrice);
      const modelYear = getRandomModelYear(price);

      if (typeof dataset[modelYear] === "undefined") {
        dataset[modelYear] = {
          data: [],
          label: modelYear,
        };
      }

      dataset[modelYear].data.push({ x: date, y: price });
    }
  }

  console.log(JSON.stringify(dataset, null, 2));
