"use client"

import { ResponsiveScatterPlot } from "@nivo/scatterplot"
import { NivoDataset } from "../mockDataGenerator"

export default function NivoExample({ dataset }: { dataset: NivoDataset[] }) {
    return (
        <ResponsiveScatterPlot
            data={dataset}
            margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
            xScale={{ type: "time", min: "auto", max: "auto" }}
            xFormat=">-.2f"
            yScale={{ type: "linear", min: "auto", max: "auto" }}
            yFormat=">-.2f"
            nodeSize={8}
            blendMode="multiply"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'weight',
                legendPosition: 'middle',
                legendOffset: 46,
                truncateTickAt: 0
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'size',
                legendPosition: 'middle',
                legendOffset: -60,
                truncateTickAt: 0
            }}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 130,
                    translateY: 0,
                    itemWidth: 100,
                    itemHeight: 12,
                    itemsSpacing: 5,
                    itemDirection: 'left-to-right',
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
}