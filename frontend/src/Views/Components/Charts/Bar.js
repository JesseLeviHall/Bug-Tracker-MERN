import React from "react";
import { useSelector } from "react-redux";
import { selectAllBugs } from "../../../Controllers/Reducers/bugSlice";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

const Bar = () => {
  const bugs = useSelector(selectAllBugs);

  const barPrimaryXAxis = {
    valueType: "Category",
    interval: 1,
    majorGridLines: { width: 0 },
  };

  const barPrimaryYAxis = {
    majorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    lineStyle: { width: 0 },
    labelStyle: { color: "transparent" },
  };

  const barChartData = [
    [
      { x: "USA", y: 46 },
      { x: "GBR", y: 27 },
      { x: "CHN", y: 26 },
    ],
    [
      { x: "USA", y: 37 },
      { x: "GBR", y: 23 },
      { x: "CHN", y: 18 },
    ],
    [
      { x: "USA", y: 38 },
      { x: "GBR", y: 17 },
      { x: "CHN", y: 26 },
    ],
  ];

  const barCustomSeries = [
    {
      dataSource: barChartData[0],
      xName: "x",
      yName: "y",
      name: "Gold",
      type: "Column",
      marker: {
        dataLabel: {
          visible: true,
          position: "Top",
          font: { fontWeight: "600", color: "#ffffff" },
        },
      },
    },
    {
      dataSource: barChartData[1],
      xName: "x",
      yName: "y",
      name: "Silver",
      type: "Column",
      marker: {
        dataLabel: {
          visible: true,
          position: "Top",
          font: { fontWeight: "600", color: "#ffffff" },
        },
      },
    },
    {
      dataSource: barChartData[2],
      xName: "x",
      yName: "y",
      name: "Bronze",
      type: "Column",
      marker: {
        dataLabel: {
          visible: true,
          position: "Top",
          font: { fontWeight: "600", color: "#ffffff" },
        },
      },
    },
  ];

  return (
    <ChartComponent
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={"#03e9f4"}
      legendSettings={{ background: "#d5c1fb79" }}>
      <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Bar;
