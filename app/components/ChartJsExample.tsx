"use client";

import { useEffect, useRef, useState, MouseEvent } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import "chartjs-adapter-date-fns";

import {
  Chart as ChartJS,
  registerables
} from "chart.js";
import { ChartJsDataset, DataPoint } from "../mockDataGenerator";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../components/Dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "../components/Drawer";
import { Button } from "./Button";
import styles from "./ChartJsExample.module.css";
import { Chart, getElementAtEvent } from "react-chartjs-2";

ChartJS.register(...registerables);

export default function ChartJsExample({
  datasets
}: {
  datasets: ChartJsDataset[];
}) {
  const [dialogData, setDialogData] = useState<DataPoint | null>(null);
  const chartRef = useRef<ChartJS>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleChartClick = (event: MouseEvent<HTMLCanvasElement>) => {
    if (!chartRef.current) {
      return;
    }

    const element = getElementAtEvent(chartRef.current, event);

    if (!element || !element[0]) {
      return;
    }

    const { datasetIndex, index } = element[0];

    triggerRef.current?.click();
    setDialogData({
      series: datasets[datasetIndex].label,
      x: datasets[datasetIndex].data[index].x,
      y: datasets[datasetIndex].data[index].y
    });
  };

  useEffect(() => {
    const plugins = ChartJS?.registry?.plugins;

    if (typeof window !== "undefined" && plugins && !plugins.get("zoom")) {
      import("chartjs-plugin-zoom").then(plugin => {
        ChartJS.register(plugin.default);
      });
    }
  }, []);

  return (
    <>
      <Chart
        // @ts-ignore
        ref={chartRef}
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
        onClick={handleChartClick}
      />
      {isDesktop && (
        <Dialog>
          <DialogTrigger style={{ display: "none" }}>
            <div style={{ display: "none" }} ref={triggerRef} />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{`${dialogData?.series} Audi Q7`}</DialogTitle>
              <DialogDescription className={styles.dialogDescription}>
                <span className={styles.dialogSpan}>
                  <strong>Price:</strong>{" "}
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0
                  }).format(dialogData?.y ?? "+Infinity")}
                </span>
                <span className={styles.dialogSpan}>
                  <strong>Date:</strong> {dialogData?.x.toDateString()}
                </span>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      {!isDesktop && (
        <Drawer>
          <DrawerTrigger style={{ display: "none" }}>
            <div style={{ display: "none" }} ref={triggerRef} />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{`${dialogData?.series} Audi Q7`}</DrawerTitle>
            </DrawerHeader>
            <DrawerDescription>
              <span className={styles.drawerSpan}>
                <strong>Price:</strong>{" "}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 0
                }).format(dialogData?.y ?? "+Infinity")}
              </span>
              <span className={styles.drawerSpan}>
                <strong>Date:</strong> {dialogData?.x.toDateString()}
              </span>
            </DrawerDescription>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}
