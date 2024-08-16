import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Depreciation Tool Charting PoC</h1>
      <p className={styles.description}>
        Select a charting library to view an example. All examples use a sample dataset generated from the same model/algorithm.
      </p>
      <ul>
        <li>
          <Link href={"/plotly"} >Plotly</Link>
        </li>
        <li>
          <a href="/vegalite">Vega-Lite</a>
        </li>
        <li>
          <a href="/chartjs">Chart.js</a>
        </li>
      </ul>
    </main>
  );
}
