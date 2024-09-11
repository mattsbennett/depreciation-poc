"use client";

import { useEffect, useRef, useState } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import ReactECharts from "echarts-for-react";
import { DataZoomComponentOption, LegendComponentOption } from "echarts";
import { useTheme } from "next-themes";
import {
  DatasetComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DataZoomComponent
} from "echarts/components";
import { ScatterChart, LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { useMediaQuery } from "@uidotdev/usehooks";
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from "echarts/core";

echarts.use([
  CanvasRenderer,
  LineChart,
  ScatterChart,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  TitleComponent,
  ToolboxComponent,
  DataZoomComponent,
  UniversalTransition,
  DatasetComponent
]);

import { ApacheData, DataPoint } from "../mockDataGenerator";
import darkTheme from "../utils/echartsDarkTheme";
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
import styles from "./ApacheExample.module.css";
import Image from "next/image";
import { ExternalLink, Lock } from "lucide-react";

const images: { [key: string]: string } = {
  "2016":
    "https://thumb.autotempest.com/cm/WA1LAAF72HD016719_4f3ac0e7-0650-4f9d-8447-cf458230ef80_fb41750e739d72d68311cec150970828_96045_32b1a6e70e9ea18949ebcf3007e05355.webp",
  "2017":
    "https://thumb.autotempest.com/cm/WA1VAAF74HD005018_ebf5cfbd-5644-44ca-895e-65411a58eafd_c8132b1d6abee5c53731b74b5508231d_72514_ce0cb575c6c7cdaec738a617d290f35c.webp",
  "2018":
    "https://thumb.autotempest.com/cm/WA1LAAF79JD020997_9c8dee54-469a-468a-a441-aa0f4d30d2db_6a7fc7d7ba255cf2ae418de2de5c59f1_64587_473395cc6a19aeb047990e5432b5eb89.webp",
  "2019":
    "https://thumb.autotempest.com/cm/WA1AAAF70KD004888_700fb547-a18c-4d09-8442-c0cf81ad32ff_467c88370e6886cb80ebd9dcee4696d3_96064_428e3b8bbd19d58b9eb6f8fa21603e38.webp",
  "2020":
    "https://thumb.autotempest.com/cm/WA1LXAF76LD005326_a99a8be0-6c1a-4c8d-a2fc-dcc2f2295ca5_df5ac22e87d6c1c33e5fd51b4d719f09_71489_854aab18a95b3d1756471638b5e0c2fd.webp"
};

const mousePath =
  "M 12.00,6.00 C 12.00,6.00 12.00,10.00 12.00,10.00M 12.00,2.00 C 15.87,2.00 19.00,5.13 19.00,9.00 19.00,9.00 19.00,15.00 19.00,15.00 19.00,18.87 15.87,22.00 12.00,22.00 12.00,22.00 12.00,22.00 12.00,22.00 8.13,22.00 5.00,18.87 5.00,15.00 5.00,15.00 5.00,9.00 5.00,9.00 5.00,5.13 8.13,2.00 12.00,2.00 12.00,2.00 12.00,2.00 12.00,2.00 Z";
const mouseOffPath =
  "M 22.00,22.00 C 22.00,22.00 2.00,2.00 2.00,2.00M 19.00,13.34 C 19.00,13.34 19.00,9.00 19.00,9.00 19.00,9.00 19.00,9.00 19.00,9.00 19.00,5.13 15.87,2.00 12.00,2.00 10.75,2.00 9.58,2.33 8.56,2.90M 18.22,18.22 C 17.05,20.47 14.71,22.00 12.00,22.00 8.13,22.00 5.00,18.87 5.00,15.00 5.00,15.00 5.00,15.00 5.00,15.00 5.00,15.00 5.00,9.00 5.00,9.00 5.00,9.00 5.00,9.00 5.00,9.00 5.00,7.84 5.28,6.74 5.78,5.78M 12.00,6.00 C 12.00,6.00 12.00,6.34 12.00,6.34";
const touchPath =
  "M 18.00,11.00 C 18.00,9.90 18.90,9.00 20.00,9.00 21.10,9.00 22.00,9.90 22.00,11.00 22.00,11.00 22.00,14.00 22.00,14.00 22.00,18.42 18.42,22.00 14.00,22.00 14.00,22.00 12.00,22.00 12.00,22.00 9.20,22.00 7.50,21.14 6.01,19.66 6.01,19.66 2.41,16.06 2.41,16.06 2.09,15.71 1.89,15.24 1.89,14.72 1.89,13.62 2.79,12.72 3.89,12.72 4.41,12.72 4.88,12.92 5.24,13.24 5.24,13.24 7.00,15.00 7.00,15.00M 10.00,9.50 C 10.00,9.50 10.00,4.00 10.00,4.00 10.00,2.90 9.10,2.00 8.00,2.00 6.90,2.00 6.00,2.90 6.00,4.00 6.00,4.00 6.00,14.00 6.00,14.00M 14.00,10.00 C 14.00,10.00 14.00,9.00 14.00,9.00 14.00,7.90 13.10,7.00 12.00,7.00 10.90,7.00 10.00,7.90 10.00,9.00 10.00,9.00 10.00,10.00 10.00,10.00M 18.00,11.00 C 18.00,11.00 18.00,10.00 18.00,10.00 18.00,8.90 17.10,8.00 16.00,8.00 14.90,8.00 14.00,8.90 14.00,10.00M 22.00,14.00 C 22.00,18.42 18.42,22.00 14.00,22.00";
const touchOffPath =
  "M 2.00,2.00 C 2.00,2.00 22.00,22.00 22.00,22.00M 6.00,6.00 C 6.00,6.00 6.00,14.00 6.00,14.00M 7.00,15.00 C 7.00,15.00 5.20,13.20 5.20,13.20 4.85,12.89 4.38,12.70 3.87,12.70 2.77,12.70 1.87,13.59 1.87,14.70 1.87,15.22 2.08,15.70 2.41,16.06 2.41,16.06 6.00,19.70 6.00,19.70 7.40,21.13 9.36,22.01 11.52,22.01 11.68,22.01 11.84,22.01 12.00,22.00 12.00,22.00 14.00,22.00 14.00,22.00 14.00,22.00 14.00,22.00 14.00,22.00 16.21,22.00 18.21,21.10 19.66,19.66M 21.70,16.20 C 21.90,15.52 22.00,14.78 22.00,14.03 22.00,14.02 22.00,14.01 22.00,14.00 22.00,14.00 22.00,11.00 22.00,11.00 22.00,9.90 21.10,9.00 20.00,9.00 18.90,9.00 18.00,9.90 18.00,11.00 18.00,11.00 18.00,10.00 18.00,10.00 18.00,8.90 17.10,8.00 16.00,8.00 15.33,8.00 14.73,8.33 14.37,8.84M 13.90,8.40 C 13.71,7.79 13.24,7.31 12.64,7.10M 10.00,4.50 C 10.00,4.50 10.00,4.00 10.00,4.00 10.00,2.90 9.10,2.00 8.00,2.00 7.86,2.00 7.72,2.02 7.59,2.04";
const undoPath =
  "M 4.00,9.00 C 4.00,9.00 14.50,9.00 14.50,9.00 17.54,9.00 20.00,11.46 20.00,14.50 20.00,17.54 17.54,20.00 14.50,20.00 14.50,20.00 11.00,20.00 11.00,20.00M 9.00,14.00 C 9.00,14.00 4.00,9.00 4.00,9.00 4.00,9.00 9.00,4.00 9.00,4.00";

// This component uses the echarts-for-react library, which is abandoned, and
// rejected for poor typescript support and rendering performance. It is
// included here for comparison with the @kbox-labs/react-echarts library.
export default function ApacheExampleAlt({ data }: { data: ApacheData }) {
  const [mounted, setMounted] = useState(false);
  const [wheelZoom, setWheelZoom] = useState(false);
  const initialZoomStart = 0;
  const initialXZoomEnd = 35;
  const initialYZoomEnd = 35000;
  const [xZoomStart, setXZoomStart] =
    useState<DataZoomComponentOption["start"]>(initialZoomStart);
  const [xZoomEnd, setXZoomEnd] =
    useState<DataZoomComponentOption["end"]>(initialXZoomEnd);
  const [yZoomStart, setYZoomStart] =
    useState<DataZoomComponentOption["start"]>(initialZoomStart);
  const [yZoomEnd, setYZoomEnd] =
    useState<DataZoomComponentOption["end"]>(initialYZoomEnd);
  const [dialogData, setDialogData] = useState<DataPoint | null>(null);
  const { resolvedTheme } = useTheme();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const triggerRef = useRef<HTMLDivElement>(null);
  const echartsRef = useRef<ReactECharts>(null);

  const legendData = data.series.filter(series => {
    return series.name !== "lowerBound";
  });

  const tooltipFormatter = (params: any) => {
    return `<div style="color: rgb(var(--foreground-rgb));"><h4 style="display: flex; flex-wrap: wrap; align-items: center; margin-bottom: 0.5rem;"><span style="display: inline-block; background-color: ${params.color}; width: 0.7rem; height: 0.7rem; border-radius: 50%; margin-right: 0.25rem;"></span>${params.seriesName} Audi Q7</h4><img style="height: 100px; width: auto;" src="${images[params.seriesName]}" /><div>${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(params.value.y)}</div><div>${params.value.x.toDateString()}</div></div>`;
  };

  const handleChartClick = (params: any) => {
    // @ts-ignore
    setXZoomStart(
      echartsRef.current?.getEchartsInstance().getOption().dataZoom[0].start
    );
    // @ts-ignore
    setXZoomEnd(
      echartsRef.current?.getEchartsInstance().getOption().dataZoom[0].end
    );
    // @ts-ignore
    setYZoomStart(
      echartsRef.current?.getEchartsInstance().getOption().dataZoom[1].start
    );
    // @ts-ignore
    setYZoomEnd(
      echartsRef.current?.getEchartsInstance().getOption().dataZoom[1].end
    );
    triggerRef.current?.click();
    setDialogData(params.value as DataPoint);
  };

  const handleRestore = () => {
    setXZoomStart(initialZoomStart);
    setXZoomEnd(initialXZoomEnd);
    setYZoomStart(initialZoomStart);
    setYZoomEnd(initialYZoomEnd);
  };

  const handleChartReady = () => {
    if (echartsRef.current) {
      console.log(echartsRef.current.getEchartsInstance());
    }
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.chartWrap}>
      <ReactEChartsCore
        ref={echartsRef}
        echarts={echarts}
        notMerge={true}
        lazyUpdate={true}
        theme={resolvedTheme === "dark" ? darkTheme : "light"}
        style={{
          width: "100%",
          height: "90vh",
          maxHeight: "800px",
          minHeight: "500px"
        }}
        option={{
          dataset: data.datasets,
          series: data.series,
          title: {
            show: true,
            text: "Audi Q7 Prices",
            left: "center"
          },
          xAxis: {
            type: "time"
          },
          yAxis: {
            type: "value",
            scale: true,
            axisLabel: {
              formatter: (val: number) =>
                `$${Math.floor((val / 1000) * 10) / 10}K`
            }
          },
          dataZoom: wheelZoom
            ? [
                {
                  id: "x_slider",
                  type: "slider",
                  show: true,
                  xAxisIndex: [0],
                  start: xZoomStart,
                  end: xZoomEnd,
                  bottom: 100,
                  filterMode: "none",
                  handleSize: 55,
                  moveHandleSize: 13
                },
                {
                  id: "y_slider",
                  type: "slider",
                  show: true,
                  yAxisIndex: [0],
                  right: 15,
                  start: yZoomStart,
                  end: yZoomEnd,
                  handleSize: 55,
                  moveHandleSize: 13
                },
                {
                  id: "x_inside",
                  type: "inside",
                  xAxisIndex: [0],
                  start: xZoomStart,
                  end: xZoomEnd,
                  filterMode: "none"
                },
                {
                  id: "y_inside",
                  type: "inside",
                  yAxisIndex: [0],
                  start: yZoomStart,
                  end: yZoomEnd,
                  zoomOnMouseWheel: "shift"
                }
              ]
            : [
                {
                  id: "x_slider",
                  type: "slider",
                  show: true,
                  xAxisIndex: [0],
                  start: xZoomStart,
                  end: xZoomEnd,
                  bottom: 100,
                  // This prevents aggregate series from disappearing when zoomed in
                  // but also reduces render performance for large datasets
                  // filterMode: "none",
                  handleSize: 55,
                  moveHandleSize: 13,
                  brushSelect: isDesktop ? true : false
                },
                {
                  id: "y_slider",
                  type: "slider",
                  show: true,
                  yAxisIndex: [0],
                  right: 15,
                  start: yZoomStart,
                  end: yZoomEnd,
                  // This prevents aggregate series from disappearing when zoomed in
                  // but also reduces render performance for large datasets
                  // filterMode: "none",
                  handleSize: 55,
                  moveHandleSize: 13,
                  brushSelect: isDesktop ? true : false
                }
              ],
          grid: {
            top: 50,
            bottom: 170,
            left: 40,
            right: 75,
            containLabel: true,
            width: "auto"
          },
          legend: {
            data: legendData.map(s => s.name) as LegendComponentOption["data"],
            bottom: 0
          },
          tooltip: isDesktop
            ? {
                backgroundColor: "rgb(var(--background-secondary-rgb))",
                borderColor: "rgba(var(--foreground-secondary-rgb), 0.25)",
                formatter: tooltipFormatter,
                trigger: "item",
                axisPointer: {
                  type: "cross"
                }
              }
            : undefined,
          toolbox: {
            show: true,
            feature: {
              // Toggle for zooming with mouse or touch
              // myZoom: {
              //   show: true,
              //   title: isDesktop ? "Wheel Zoom" : "Pinch Zoom",
              //   icon: isDesktop ? wheelZoom ? `path://${mousePath}` : `path://${mouseOffPath}` : wheelZoom ? `path://${touchOffPath}` : `path://${touchPath}`,
              //   iconStyle: {
              //     borderColor: resolvedTheme === "dark" ? "#B9B8CE" : "black"
              //   },
              //   emphasis: {
              //     iconStyle: {
              //       borderColor: "rgb(59, 141, 186)"
              //     }
              //   },
              //   onclick: function (params: any) {
              //     // @ts-ignore
              //     setXZoomStart(echartsRef.current?.getEchartsInstance().getOption().dataZoom[0].start);
              //     // @ts-ignore
              //     setXZoomEnd(echartsRef.current?.getEchartsInstance().getOption().dataZoom[0].end);
              //     // @ts-ignore
              //     setYZoomStart(echartsRef.current?.getEchartsInstance().getOption().dataZoom[1].start);
              //     // @ts-ignore
              //     setYZoomEnd(echartsRef.current?.getEchartsInstance().getOption().dataZoom[1].end);
              //     setWheelZoom(!wheelZoom);
              //   }
              // },
              restore: {
                title: "Reset Zoom",
                icon: `path://${undoPath}`
              }
            }
          }
        }}
        opts={{
          renderer: "canvas"
        }}
        onChartReady={handleChartReady}
        onEvents={{
          click: handleChartClick,
          restore: handleRestore
        }}
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
                <Image
                  src={images[dialogData?.series ?? "2016"]}
                  alt="Audi Q7"
                  sizes="100vw"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                />
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
              <Button variant="outline">
                View Listing <ExternalLink size={16} />
              </Button>
              <DrawerClose asChild>
                <Button variant="default">Close</Button>
              </DrawerClose>
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
            <DrawerDescription className={styles.drawerDescription}>
              <Image
                src={images[dialogData?.series ?? "2016"]}
                alt="Audi Q7"
                sizes="100vw"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
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
              <Button variant="outline">
                View Listing <ExternalLink size={16} />
              </Button>
              <DrawerClose asChild>
                <Button variant="default">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
}
