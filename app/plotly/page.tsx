"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { PlotlyDataset, getPlotlyData } from "../mockDataGenerator";
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
import PlotlyExample from "../components/PlotlyExample";
import { chartFormSchema } from "../utils/chartFormUtils";
import styles from "./page.module.css";

export default function PlotlyPage() {
  const [datasets, setDatasets] = useState<PlotlyDataset[]>(getPlotlyData());
  const form = useForm<z.infer<typeof chartFormSchema>>({
    resolver: zodResolver(chartFormSchema),
    defaultValues: {
      recordCount: 1000,
      polyDegree: 3
    }
  });

  function onSubmit(values: z.infer<typeof chartFormSchema>) {
    setDatasets(getPlotlyData(values.recordCount, values.polyDegree));
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Plotly.js Example</h1>
        <h2>Notes</h2>
        <ul>
          <li>
            Design is somewhat dated, extensive theme/customization effort may
            be required
          </li>
          <li>
            Interactions are extensive out-of-the-box (handy click/double-click
            actions on legend, though double-click is not entirely intuitive),
            though more complicated (uses a toolbar, most of which we could
            hide)
          </li>
          <li>
            No multi-touch support; zoom uses brush pattern instead of pinch,
            which works well; wheel zoom is generally the smoothest of options
            evaluated. Kind of annoying that native pan/zoom doesn&apos;t work
            for trackpads/mobile (must toggle pan/zoom using toolbar) but this
            approach works flawlessly and without the jank of chartjs&apos;s
            pinch. Probably also slightly less intuitive than pinch however.
          </li>
          <li>
            Helper tooltips show on chart actions (hover, click, etc.), will
            need to investigate theme customization for them.
          </li>
          <li>
            Performance is best of options evaluated, includes webgl rendering
            option
          </li>
          <li>
            Aggregate and regression statistics must be calculated manually and
            reduced to a set of x/y values which are then plotted
          </li>
          <li>
            React support is decent, and actually maintained by the Plotly team
            (not the case for the other libraries whose react bindings seem
            abandoned/unmaintained). Typescript support is not great, but at
            least present.
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
              <Button type="submit">Apply</Button>
            </form>
          </Form>
        </div>
        <div className={styles.chartWrap}>
          <PlotlyExample datasets={datasets} />
        </div>
      </main>
    </>
  );
}
