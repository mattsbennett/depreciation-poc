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
  DrawerTrigger,
} from "../components/Drawer"
import { Button } from "./Button";
import styles from "./ApacheExample.module.css";

export default function ApacheExample({ data }: { data: ApacheData }) {
  const [mounted, setMounted] = useState(false);
  const [dialogData, setDialogData] = useState<DataPoint | null>(null);
  const { resolvedTheme } = useTheme();
  // Narrow and wide styles are the same for now
  const narrowStyles = {
    grid: {
      top: 50,
      bottom: 170,
      left: 40,
      right: 75,
      width: "auto"
    },
    dataZoomX: {
      type: "slider",
      show: true,
      xAxisIndex: [0],
      start: 0,
      end: 35,
      bottom: 100,
      filterMode: "none",
      handleSize: 55,
      moveHandleSize: 13
    },
  };
  const wideStyles = {
    grid: {
      top: 50,
      bottom: 170,
      left: 40,
      right: 75,
      width: "auto"
    },
    dataZoomX: {
      type: "slider",
      show: true,
      xAxisIndex: [0],
      start: 0,
      end: 35,
      bottom: 100,
      filterMode: "none",
      handleSize: 55,
      moveHandleSize: 13
    },
  };
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const triggerRef = useRef<HTMLDivElement>(null);

  const legendData = data.series.filter((series) => {
    return series.name !== 'lowerBound'
  })

  const handleChartClick = (params: any) => {
    triggerRef.current?.click();
    setDialogData(params.value as DataPoint);
  };

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
        style={{ width: "100%", height: "90vh", maxHeight: "800px", minHeight: "500px" }}
        xAxis={{
          type: "time"
        }}
        yAxis={{
          type: "value",
          scale: true,
          axisLabel: {
            formatter: val => `$${val/1000}K`
          }
        }}
        theme={resolvedTheme === "dark" ? darkTheme : "light"}
        dataset={data.datasets}
        series={data.series}
        grid={isDesktop ? wideStyles.grid : narrowStyles.grid}
        legend={{
          data: legendData.map(s => s.name) as LegendComponentOption["data"],
          bottom: 0
        }}
        tooltip={isDesktop ? {
          trigger: "item",
          axisPointer: {
            type: "cross"
          }
        } : undefined}
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
          (isDesktop ? wideStyles.dataZoomX : narrowStyles.dataZoomX) as DataZoomComponentOption,
          {
            type: "slider",
            show: true,
            yAxisIndex: [0],
            right: 15,
            start: 0,
            end: 35000,
            handleSize: 55,
            moveHandleSize: 13
          },
          {
            type: "inside",
            xAxisIndex: [0],
            start: 0,
            end: 35,
            filterMode: "none"
          },
          {
            type: "inside",
            yAxisIndex: [0],
            start: 0,
            end: 35000,
            zoomOnMouseWheel: "shift"
          }
        ]}
        onClick={handleChartClick as any}
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
              <span className={styles.dialogSpan}><strong>Price:</strong> {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(dialogData?.y ?? "+Infinity")}</span>
              <span className={styles.dialogSpan}><strong>Date:</strong> {dialogData?.x.toDateString()}</span>
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
              <span className={styles.drawerSpan}><strong>Price:</strong> {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(dialogData?.y ?? "+Infinity")}</span>
              <span className={styles.drawerSpan}><strong>Date:</strong> {dialogData?.x.toDateString()}</span>
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
