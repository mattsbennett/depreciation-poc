"use client";

import { useEffect, useRef, useState } from "react";
import { EChart } from "@kbox-labs/react-echarts";
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

import { ApacheData, DataPoint } from "../mockDataGenerator";
import darkTheme from "../utils/echartsDarkTheme";
import { TitleOption } from "echarts/types/dist/shared";
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
import { ExternalLink } from "lucide-react";

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

export default function ApacheExample({ data }: { data: ApacheData }) {
  const [mounted, setMounted] = useState(false);
  const initialZoomStart = 0;
  const initialXZoomEnd = 35;
  const initialYZoomEnd = 35000;
  const [xZoomStart, setXZoomStart] = useState<DataZoomComponentOption["start"]>(initialZoomStart);
  const [xZoomEnd, setXZoomEnd] = useState<DataZoomComponentOption["end"]>(initialXZoomEnd);
  const [yZoomStart, setYZoomStart] = useState<DataZoomComponentOption["start"]>(initialZoomStart);
  const [yZoomEnd, setYZoomEnd] = useState<DataZoomComponentOption["end"]>(initialYZoomEnd);
  const [dialogData, setDialogData] = useState<DataPoint | null>(null);
  const { resolvedTheme } = useTheme();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const triggerRef = useRef<HTMLDivElement>(null);

  const legendData = data.series.filter(series => {
    return series.name !== "lowerBound";
  });

  const tooltipFormatter = (params: any) => {
    return `<div style="color: rgb(var(--foreground-rgb));"><h4 style="display: flex; flex-wrap: wrap; align-items: center; margin-bottom: 0.5rem;"><span style="display: inline-block; background-color: ${params.color}; width: 0.7rem; height: 0.7rem; border-radius: 50%; margin-right: 0.25rem;"></span>${params.seriesName} Audi Q7</h4><img style="height: 100px; width: auto;" src="${images[params.seriesName]}" /><div>${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(params.value.y)}</div><div>${params.value.x.toDateString()}</div></div>`;
  };

  const handleChartClick = (params: any) => {
    triggerRef.current?.click();
    setDialogData(params.value as DataPoint);
  };

  const handleDataZoom = (params: any) => {
    const dataZoom = params.batch ? params.batch[0] : params;

    if (dataZoom.dataZoomId.includes("x_")) {
      setXZoomStart(dataZoom.start);
      setXZoomEnd(dataZoom.end);
    } else if (dataZoom.dataZoomId.includes("y_")) {
      setYZoomStart(dataZoom.start);
      setYZoomEnd(dataZoom.end);
    }
  }

  const handleRestore = () => {
    setXZoomStart(initialZoomStart);
    setXZoomEnd(initialXZoomEnd);
    setYZoomStart(initialZoomStart);
    setYZoomEnd(initialYZoomEnd);
  }

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <EChart
        use={[
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
        ]}
        renderer="canvas"
        style={{
          width: "100%",
          height: "90vh",
          maxHeight: "800px",
          minHeight: "500px"
        }}
        xAxis={{
          type: "time"
        }}
        yAxis={{
          type: "value",
          scale: true,
          axisLabel: {
            formatter: val => `$${val / 1000}K`
          }
        }}
        theme={resolvedTheme === "dark" ? darkTheme : "light"}
        dataset={data.datasets}
        series={data.series}
        grid={{
          top: 50,
          bottom: 170,
          left: 40,
          right: 75,
          width: "auto"
        }}
        legend={{
          data: legendData.map(s => s.name) as LegendComponentOption["data"],
          bottom: 0
        }}
        tooltip={
          isDesktop
            ? {
                backgroundColor: "rgb(var(--background-secondary-rgb))",
                borderColor: "rgba(var(--foreground-secondary-rgb), 0.25)",
                formatter: tooltipFormatter,
                trigger: "item",
                axisPointer: {
                  type: "cross"
                }
              }
            : {
              formatter: tooltipFormatter,
              trigger: "item",
              axisPointer: {
                type: "cross"
              }
            }
        }
        toolbox={{
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            restore: {}
          }
        }}
        title={
          {
            show: true,
            text: "Audi Q7 Prices",
            left: "center"
          } as TitleOption & string
        }
        dataZoom={[
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
        ]}
        onClick={handleChartClick as any}
        onDataZoom={handleDataZoom as any}
        onRestore={handleRestore as any}
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
    </>
  );
}
