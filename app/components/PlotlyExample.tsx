"use client";

import dynamic from "next/dynamic";
// @ts-ignore
const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false
});

import { PlotlyDataset } from "../mockDataGenerator";

export default function PlotlyExample({
  datasets
}: {
  datasets: PlotlyDataset[];
}) {
  const layout = {
    margin: {
      t: 100,
      r: 50,
      b: 100,
      l: 50
    },
    paper_bgcolor: "rgba(255,255,255, 0)",
    title: "Audi Q7 Prices",
    xaxis: {
      title: "Date",
      type: "date"
    },
    yaxis: {
      fixedrange: true,
      title: "Price",
      rangemode: "nonnegative",
      autorange: true
    },
    legend: {
      orientation: "h"
    }
  };

  const config = {
    displaylogo: false,
    displayModeBar: true,
    scrollZoom: true,
    responsive: true
  };
  return (
    <Plot
      // @ts-ignore
      config={config}
      data={datasets}
      layout={layout}
      style={{ width: "100%", height: "800px" }}
    />
  );
}
