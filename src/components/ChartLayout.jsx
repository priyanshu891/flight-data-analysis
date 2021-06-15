import React from "react";
import { Chart } from "react-google-charts";

const ChartLayout = () => {
  return (
    <div style={{ display: "flex", maxWidth: 1920 }}>
      <Chart
        width={1280}
        height={768}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Carrier", "Number of Flights"],
          ["UA", 58665],
          ["B6", 54635],
          ["EV", 54173],
          ["DL", 48110],
          ["AA", 32729],
          ["MQ", 26397],
          ["US", 20536],
          ["9E", 18460],
          ["WN", 12275],
          ["VX", 5162],
          ["FL", 3260],
          ["AS", 714],
          ["F9", 685],
          ["YV", 601],
          ["HA", 342],
          ["OO", 32],
        ]}
        options={{
          title: "Frequency Distribution of Carrier",
          chartArea: { width: "50%" },
          
          hAxis: {
            title: "Number of Flights",
            minValue: 0,
          },
          vAxis: {
            title: "Carrier",
          },
        }}
        legendToggle
      />
    </div>
  );
};

export default ChartLayout;
