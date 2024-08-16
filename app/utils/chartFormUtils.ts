import { VisualizationSpec } from "react-vega";
import { z } from "zod";
import { VegaLiteDataset } from "../mockDataGenerator";

export const chartFormSchema = z.object({
  recordCount: z.coerce
    .number()
    .min(500, { message: "At least 500 records must be plotted" })
    .max(50000, { message: "At most 50,000 records can be plotted" }),
  polyDegree: z.coerce
    .number()
    .min(1, { message: "Polynomial degree/order must be at least 1 (linear)" })
    .max(10, { message: "Polynomial degree/order must be at most 10" })
});

export function getVegaLiteSpec(
  polyOrder: number,
  dataset: VegaLiteDataset[]
): VisualizationSpec {
    console.log(polyOrder);
  const spec = {
    background: "transparent",
    title: "Audi Q7 Prices",
    config: {
      customFormatTypes: true,
      scale: {
        round: false
      }
    },
    description:
      "Plot of car prices over time with polynomial regression and mean +/- 1 stdev overlaid.",
    width: "container",
    height: 600,
    data: { name: "table", values: dataset },
    transform: [
      {
        window: [
          {
            op: "average",
            field: "price",
            as: "Mean Price (+- stddev)"
          }
        ],
        frame: [-30, 30]
      }
    ],
    layer: [
      {
        mark: {
          type: "point",
          filled: true,
          tooltip: true,
          size: 100,
          clip: true
        },
        encoding: {
          x: {
            field: "date",
            title: "Date",
            type: "temporal",
            axis: {
              title: "Date"
            },
            scale: {
              domain: ["2020-01-01", "2023-12-31"]
            }
          },
          y: {
            field: "price",
            title: "Price",
            type: "quantitative",
            format: "",
            formatType: "shortPriceFormat",
            scale: {
              domain: [7000, 33000]
            },
            axis: {
              title: "Price"
            }
          },
          color: {
            field: "modelYear",
            type: "nominal",
            title: "Model Year"
          },
          opacity: {
            condition: {
              param: "modelYear",
              value: 1
            },
            value: 0.2
          }
        },
        params: [
          {
            name: "grid",
            select: "interval",
            bind: "scales"
          },
          {
            name: "modelYear",
            select: {
              type: "point",
              fields: ["modelYear"]
            },
            bind: "legend"
          }
        ]
      },
      {
        name: "Polynomial Regression",
        mark: {
          type: "line",
          strokeWidth: 4
        },
        transform: [
          {
            regression: "price",
            on: "date",
            method: "poly",
            order: polyOrder
          }
        ],
        encoding: {
          x: {
            field: "date",
            type: "temporal"
          },
          y: {
            field: "price",
            type: "quantitative"
          },
          color: {
            datum: "Polynomial Regression"
          }
        }
      },
      {
        mark: {
          type: "errorband",
          extent: "stdev",
          opacity: 0.4
        },
        encoding: {
          y: {
            field: "Mean Price (+- stddev)",
            type: "quantitative",
            title: "Price"
          },
          tooltip: null,
          color: {
            datum: "Mean Price (+- stddev)"
          }
        }
      },
      {
        mark: {
          type: "rule",
          strokeWidth: 2
        },
        encoding: {
          y: {
            field: "Mean Price (+- stddev)",
            type: "quantitative",
            aggregate: "mean"
          },
          color: {
            datum: "Mean Price (+- stddev)"
          }
        }
      }
    ]
  } as VisualizationSpec;

  return spec;
}
