"use client"

import VegaLite from "../components/VegaLite";
import styles from "./page.module.css";

export default function VegaLiteExample() {
    return (
      <main className={styles.main}>
        <VegaLite />
        <h3>Notes</h3>
        <ul>
          <li>{"Doesn't seem to be a way to constrain zoom to min/max ranges"}</li>
          <li>Pinch zoom/multi-touch on mobile <a href='https://vega.github.io/vega/examples/zoomable-scatter-plot/'>is barely functional</a> (didn&apos;t bother to implement here as it&apos;s so bad)</li>
          <li>Legend/labels not interactive out-of-the-box, requires custom event-based implementation</li>
          <li>Regression and aggregate analysis automatically calculated internally, though it doesn&apos;t match manual calculations</li>
          <li>Least performant of the options considered (zoom/pan performance degrades significantly around 1000 points)</li>
        </ul>
      </main>
    );
  }