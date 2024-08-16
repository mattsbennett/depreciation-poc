"use client"

import { VegaLite, VisualizationSpec } from "react-vega";
import { expressionFunction } from "vega";
import { VegaLiteDataset } from "../mockDataGenerator";

export default function VegaExample({ dataset, spec }: { dataset: VegaLiteDataset[], spec: VisualizationSpec }) {
  return <VegaLite spec={spec} data={{ table: dataset}} expressionFunctions={
    // How does this work? No docs.
    //@ts-ignore
    expressionFunction("shortPriceFormat", function (datum, params) {
      return `$${datum / 1000}k`;
    })
  } />;
}
