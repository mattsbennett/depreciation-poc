"use client"

import { useEffect } from "react";
import dynamic from "next/dynamic";
import "chartjs-adapter-date-fns";

const Chart = dynamic(() => import("react-chartjs-2").then(mod => mod.Chart), {
  ssr: false
});

import { Chart as ChartJS, registerables } from "chart.js";
import { ChartJsDataset } from "../mockDataGenerator";

ChartJS.register(...registerables);

export default function ChartJsExample({ datasets }: { datasets: ChartJsDataset[] }) {
    useEffect(() => {
        const plugins = ChartJS?.registry?.plugins;

        if (typeof window !== "undefined" && plugins && !plugins.get("zoom")) {
          import("chartjs-plugin-zoom").then(plugin => {
            ChartJS.register(plugin.default);
          });
        }
      }, []);

  return (
    <Chart
      type="scatter"
      data={{
        labels: ["Date", "Price"],
        // @ts-ignore
        datasets
      }}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            labels: {
              filter: function (legendItem, chartData) {
                //@ts-ignore
                return chartData.datasets[legendItem.datasetIndex].label;
              }
            }
          },
          title: {
            display: true,
            text: "Audi Q7 Prices"
          },
          zoom: {
            pan: {
              enabled: true,
              mode: "x"
            },
            zoom: {
              wheel: {
                enabled: true
              },
              pinch: {
                enabled: true
              },
              mode: "x"
            }
          }
        },
        scales: {
          x: {
            type: "time",
            min: "2020-01-01",
            max: "2023-12-31"
          },
          y: {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, ticks) {
                //@ts-ignore
                return `$${value / 1000}k`;
              }
            }
          }
        }
      }}
    />
  );
}
