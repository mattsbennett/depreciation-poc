"use client";

import { EChart } from "@kbox-labs/react-echarts";
import { getApacheData } from "../mockDataGenerator";
import { LegendComponentOption } from "echarts";

export default function ApacheExample() {
  const data = getApacheData();
  const datasets = data.datasets;
  const series = data.series;

  return (
    <EChart
      renderer="canvas"
      style={{ width: "100%", height: "800px" }}
      xAxis={{
        type: "time"
      }}
      yAxis={{
        type: "value",
        scale: true
      }}
      theme={"dark"}
      dataset={datasets}
      series={series}
      legend={{
        data: series.map(s => s.name)  as LegendComponentOption["data"],
        tooltip: {
          show: true
        }
      }}
      tooltip={{
        trigger: "item",
        axisPointer: {
          type: "cross"
        }
      }}
      toolbox={{
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: "none"
          },
          restore: {},
        }
      }}
      // title={{
      //   show: true,
      //   text: "Audi Q7 Prices"
      // }}
      dataZoom={[
        {
          type: "slider",
          show: true,
          xAxisIndex: [0],
          start: 0,
          end: 35
        },
        {
          type: "slider",
          show: true,
          yAxisIndex: [0],
          left: "93%",
          start: 0,
          end: 35000
        },
        {
          type: "inside",
          xAxisIndex: [0],
          start: 0,
          end: 35
        },
        {
          type: "inside",
          yAxisIndex: [0],
          start: 0,
          end: 35000,
          zoomOnMouseWheel: "shift"
        }
      ]}
    />
  );
}
