"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";

import { ChartJsDataset, getChartJsData } from "../mockDataGenerator";
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
import { chartFormSchema } from "../utils/chartFormUtils";
import styles from "./page.module.css";

const ChartJsExample = dynamic(() => import("../components/ChartJsExample"), {
  ssr: false
});

export default function ChartJsPage() {
  const [datasets, setDatasets] = useState<ChartJsDataset[]>(getChartJsData());
  const form = useForm<z.infer<typeof chartFormSchema>>({
    resolver: zodResolver(chartFormSchema),
    defaultValues: {
      recordCount: 1000,
      polyDegree: 3
    }
  });

  function onSubmit(values: z.infer<typeof chartFormSchema>) {
    setDatasets(getChartJsData(values.recordCount, values.polyDegree));
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Chart.js Example</h1>
        <h2>Notes</h2>
        <ul>
          <li>Design is simple/clean</li>
          <li>
            Once a specific color is set on one dataset, all datasets must have
            colors manually set (hence why mean and stddev don&apos;t match
            here, didn&apos;t bother optimizing colors)
          </li>
          <li>
            With trackpads/touch, zoom sometimes doesn&apos;t work until after a
            pan, and isn&apos;t as smooth as Plotly.
          </li>
          <li>
            Interactions are limited out-of-the-box, but mostly sufficient for
            our use-case
          </li>
          <li>
            Aggregate and regression statistics must be calculated manually and
            reduced to a set of x/y values which are then plotted
          </li>
          <li>
            React support exists, but seems possibly abandoned, Typescript
            support is a bit rough
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
                      Degree to use for polynomial regression
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" variant="outline">
                Apply
              </Button>
            </form>
          </Form>
        </div>
        <div className={styles.chartWrap}>
          <ChartJsExample datasets={datasets} />
        </div>
      </main>
    </>
  );
}
