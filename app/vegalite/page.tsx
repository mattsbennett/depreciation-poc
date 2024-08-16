"use client";

import Header from "../components/Header";
import VegaLite from "../components/VegaLite";
import styles from "./page.module.css";

export default function VegaLiteExample() {
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
            filtering (clicking on legend heading)
          </li>
          <li>
            Regression and aggregate analysis calculated internally, though it
            doesn&apos;t match manual calculations, seems incorrect
          </li>
          <li>
            Least performant of the options considered (zoom/pan performance
            degrades significantly around 1000 points)
          </li>
          <li>React support, first-class Typescript support</li>
        </ul>
        <VegaLite />
      </main>
    </>
  );
}
