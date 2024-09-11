import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "./components/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Depreciation Tool Charting PoC</h1>
      <p className={styles.description}>
        Select a charting library to view an example. All examples use a sample
        dataset generated from the same model/algorithm. Primary criteria were
        OSS, React, and Typescript support.
      </p>

      <h2>Under consideration</h2>
      <ul>
        <li>
          <Card>
            <Link href="/apache">
              Apache ECharts
              <ArrowRight />
            </Link>
          </Card>
        </li>
      </ul>

      <h2>Rejected</h2>
      <ul>
        <li>
          <Card>
            <Link href="/chartjs">
              Chart.js
              <ArrowRight />
            </Link>
          </Card>
        </li>
        <li>
          <Card>
            <Link href={"/plotly"}>
              Plotly.js
              <ArrowRight />
            </Link>
          </Card>
        </li>
        <li>
          <Card>
            <Link href="/vegalite">
              Vega-Lite
              <ArrowRight />
            </Link>
          </Card>
        </li>
      </ul>
    </main>
  );
}
