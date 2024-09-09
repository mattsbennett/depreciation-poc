"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";

import { ApacheData, getApacheData } from "../mockDataGenerator";
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
import clsx from "clsx";

const ApacheExample = dynamic(() => import("../components/ApacheExample"), {
  ssr: false
});

const ApacheExampleAlt = dynamic(
  () => import("../components/ApacheExampleAlt"),
  {
    ssr: false
  }
);

export default function ApacheEchartsPage() {
  const [datasets, setDatasets] = useState<ApacheData>(getApacheData());
  const form = useForm<z.infer<typeof chartFormSchema>>({
    resolver: zodResolver(chartFormSchema),
    defaultValues: {
      recordCount: 1000,
      polyDegree: 3
    }
  });

  function onSubmit(values: z.infer<typeof chartFormSchema>) {
    setDatasets(getApacheData(values.recordCount, values.polyDegree));
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Apache ECharts Example</h1>
        <h2>Notes</h2>
        <ul>
          <li>
            Design is simple/clean, with plenty of useful UX out of the box
          </li>
          <li>Extensive customization options, including full theme system</li>
          <li>
            Interactions are highly customizable, and mobile optimized; best of
            the options considered. Minimap/brush zoom seems the best UX for our
            plans (content below chart), as it sidesteps the issue of
            scrolling/panning being unintentionally captured by the chart (on
            both mobile and desktop).
          </li>
          <li>
            Typescript support is excellent: Not a single bug/ts-ignore required
            to build example. There are several react wrappers available; most
            are abandoned, though one is recent, and the author at least
            responded promptly when I opened a{" "}
            <a href="https://github.com/hugocxl/react-echarts/issues/45">
              couple
            </a>{" "}
            <a
              href="https://github.com/hugocxl/react-echarts/issues/49"
              target="_blank"
            >
              issues
            </a>
            .
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
          <ApacheExample data={datasets} />
        </div>
      </main>
    </>
  );
}
