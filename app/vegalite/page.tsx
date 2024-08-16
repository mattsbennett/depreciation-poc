"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { VegaLiteDataset, getVegaLiteData } from "../mockDataGenerator";
import Header from "../components/Header";
import { Button } from "../components/Button";
import { Slider } from "../components/Slider";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../components/Form";
import VegaLiteExample from "../components/VegaLiteExample";
import VegaLite from "../components/VegaLite";
import { chartFormSchema, getVegaLiteSpec } from "../utils/chartFormUtils";
import styles from "./page.module.css";
import { createClassFromSpec, VisualizationSpec } from "react-vega";

const defaultDataset = getVegaLiteData();
const defaultSpec = getVegaLiteSpec(3, defaultDataset);

export default function VegaLitePage() {
  const [dataset, setDataset] = useState<VegaLiteDataset[]>(defaultDataset);
  const [spec, setSpec] = useState<VisualizationSpec>(defaultSpec);
  const form = useForm<z.infer<typeof chartFormSchema>>({
    resolver: zodResolver(chartFormSchema),
    defaultValues: {
      recordCount: 1000,
      polyDegree: 3
    }
  });

  function onSubmit(values: z.infer<typeof chartFormSchema>) {
    setDataset(getVegaLiteData(values.recordCount));
    setSpec(getVegaLiteSpec(values.polyDegree, dataset));
  }

  console.log(spec);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Vega-Lite Example</h1>
        <h2>Notes</h2>
        <ul>
          <li>
            {"Doesn't seem to be a way to constrain zoom to min/max ranges"}
          </li>
          <li>
            Pinch zoom/multi-touch on mobile{" "}
            <a href="https://vega.github.io/vega/examples/zoomable-scatter-plot/">
              is barely functional
            </a>{" "}
            (didn&apos;t bother to implement here as it&apos;s so bad)
          </li>
          <li>
            Interactive legend is nice, but it&apos;s not clear how to disable
            filtering (clicking anywhere on legend (besides values) or plot)
          </li>
          <li>
            Regression and aggregate analysis calculated internally, though it
            doesn&apos;t match manual calculations, seems incorrect. Polynomial
            regression seems broken with react-vega, though it works fine in
            vega-editor (online). Could manually calculate and plot like the
            others.
          </li>
          <li>Seems less performant than other options considered</li>
          <li>
            React support exists, but is poorly documented (I haven&apos;t
            figured out how to custom format axis labels, there are no
            react-specific docs for that), has Typescript support
          </li>
        </ul>
        <h2>Chart Settings</h2>
        <div className={styles.formWrap}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="recordCount"
                render={({ field: { value, onChange } }) => (
                  <FormItem>
                    <FormLabel>
                      Records: <strong>{value}</strong>
                    </FormLabel>
                    <FormControl>
                      <Slider
                        min={
                          chartFormSchema.shape.recordCount.minValue as number
                        }
                        max={
                          chartFormSchema.shape.recordCount.maxValue as number
                        }
                        step={100}
                        defaultValue={[1000]}
                        onChange={onChange}
                      />
                    </FormControl>
                    <FormDescription>
                      Number of price history records to generate and plot
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="polyDegree"
                render={({ field: { value, onChange } }) => (
                  <FormItem>
                    <FormLabel>
                      Polynomial Degree: <strong>{value}</strong>
                    </FormLabel>
                    <FormControl>
                      <Slider
                        min={
                          chartFormSchema.shape.polyDegree.minValue as number
                        }
                        max={
                          chartFormSchema.shape.polyDegree.maxValue as number
                        }
                        step={1}
                        defaultValue={[3]}
                        onChange={onChange}
                      />
                    </FormControl>
                    <FormDescription>
                      Degree to use for polynomial regression (there&apos;s a bug
                      either in react-vega or my implementation here)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Apply</Button>
            </form>
          </Form>
        </div>
        <div className={styles.chartWrap}>
          {/* {React.createElement(createClassFromSpec({mode: "vega-lite", spec}))} */}
          <VegaLiteExample spec={spec} dataset={dataset} />
          {/* <VegaLite /> */}
        </div>
      </main>
    </>
  );
}
