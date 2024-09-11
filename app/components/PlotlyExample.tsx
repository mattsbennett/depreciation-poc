"use client";

import { useRef, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import dynamic from "next/dynamic";
// @ts-ignore
const Plot = dynamic(() => import("react-plotly.js"), {
  ssr: false
});

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
import { DataPoint, PlotlyDataset } from "../mockDataGenerator";
import { Button } from "./Button";
import styles from "./PlotlyExample.module.css";

export default function PlotlyExample({
  datasets
}: {
  datasets: PlotlyDataset[];
}) {
  const [dialogData, setDialogData] = useState<DataPoint | null>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const triggerRef = useRef<HTMLDivElement>(null);
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

  const handleChartClick = (event: any) => {
    triggerRef.current?.click();
    setDialogData({
      x: new Date(event.points[0].x),
      y: event.points[0].y,
      series: event.points[0].data.name
    });
  };
  return (
    <>
      <Plot
        // @ts-ignore
        config={config}
        data={datasets}
        layout={layout}
        style={{ width: "100%", height: "800px" }}
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
