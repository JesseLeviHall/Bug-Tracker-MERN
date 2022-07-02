import React from "react";
import { useSelector } from "react-redux";
import { selectAllBugs } from "../../../Controllers/Reducers/bugSlice";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

//import {lineCustomSeries,LinePrimaryXAxis,LinePrimaryYAxis,
//} from "../../data/dummy";

const LineChart = () => {
  const bugs = useSelector(selectAllBugs);

  const lineChartData = [
    [
      { x: new Date(2005, 0, 1), y: 21 },
      { x: new Date(2006, 0, 1), y: 24 },
      { x: new Date(2007, 0, 1), y: 36 },
      { x: new Date(2008, 0, 1), y: 38 },
      { x: new Date(2009, 0, 1), y: 54 },
      { x: new Date(2010, 0, 1), y: 57 },
      { x: new Date(2011, 0, 1), y: 70 },
    ],
  ];

  const lineCustomSeries = [
    {
      dataSource: lineChartData[0],
      xName: "x",
      yName: "y",
      name: "Bugs Submitted",
      width: "2",
      marker: { visible: true, width: 10, height: 10 },
      type: "Line",
    },
  ];

  const LinePrimaryXAxis = {
    valueType: "DateTime",
    labelFormat: "y",
    intervalType: "Months",
    edgeLabelPlacement: "Shift",
    majorGridLines: { width: 0 },
    background: "#03e9f4",
  };

  const LinePrimaryYAxis = {
    labelFormat: "{value}",
    rangePadding: "None",
    minimum: 0,
    maximum: 100,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };

  return (
    <ChartComponent
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={"#03e9f4"}
      legendSettings={{ background: "#d5c1fb79" }}>
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
