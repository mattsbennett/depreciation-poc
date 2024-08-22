"use client"

import Link from "next/link";
import { Home } from "lucide-react";

import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

const pages = {
    "/apache": "Apache ECharts",
    "/chartjs": "Chart.js",
    "/plotly": "Plotly.js",
}

export default function Header() {
    const pathname = usePathname();
    const getActiveClass = (path: string) => {
        return path === pathname ? styles.active : "";
    }
  return (
    <header className={styles.header}>
      <div className={styles.home}>
        <Link href="/" className={styles.active}>
          <Home />
        </Link>
      </div>
      <div className={styles.pages}>
        {Object.entries(pages).map(([path, name]) => (
          <Link key={path} href={path} className={getActiveClass(path)}>
            {name}
          </Link>
        ))}
      </div>
    </header>
  );
}
