"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { NivoDataset, getNivoData } from "../mockDataGenerator";
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
import NivoExample from "../components/NivoExample";
import { chartFormSchema } from "../utils/chartFormUtils";
import styles from "./page.module.css";
import clsx from "clsx";

export default function ChartJsPage() {
  const [datasets, setDatasets] = useState<NivoDataset[]>(getNivoData());
  const form = useForm<z.infer<typeof chartFormSchema>>({
    resolver: zodResolver(chartFormSchema),
    defaultValues: {
      recordCount: 1000,
      polyDegree: 3
    }
  });

  function onSubmit(values: z.infer<typeof chartFormSchema>) {
    setDatasets(getNivoData(values.recordCount, values.polyDegree));
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Nivo Example</h1>
        <h2>Notes</h2>
        <ul>
          <li>
            Zoom/pan must be implemented manually
          </li>
          <li>
            Composable charts/layers are complicated to implement
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
                        min={chartFormSchema.shape.recordCount.minValue as number}
                        max={chartFormSchema.shape.recordCount.maxValue as number}
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
                        min={chartFormSchema.shape.polyDegree.minValue as number}
                        max={chartFormSchema.shape.polyDegree.maxValue as number}
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
              <Button type="submit">Apply</Button>
            </form>
          </Form>
        </div>
        <div className={clsx(styles.chartWrap, styles.nivoChart)}>
          <NivoExample dataset={datasets} />
        </div>
      </main>
    </>
  );
}
