import React from "react";
import { useSelector } from "react-redux";
import { selectAllBugs } from "../../../Controllers/Reducers/bugSlice";
import moment from "moment";
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

const LineChart = () => {
  const bugs = useSelector(selectAllBugs);

  function filterByCreatedDateLastMonth(bugs) {
    const todaysDate = new Date();
    const startDayOfPrevMonth = moment(todaysDate)
      .subtract(1, "month")
      .startOf("month")
      .format("LLLL");
    const lastDayOfPrevMonth = moment(todaysDate)
      .subtract(1, "month")
      .endOf("month")
      .format("LLLL");

    bugs.filter((month) => {
      const createdDate = month.time;
      return moment(createdDate).isBetween(
        startDayOfPrevMonth,
        lastDayOfPrevMonth
      );
    });
  }

  console.log(filterByCreatedDateLastMonth());

  const date = bugs.map((bug) => [moment(bug.time).format("YYYY, DD, MM")]);
  const bugCount = date.length;

  const lineChartData = [
    [
      { x: `${date[0]}`, y: bugCount },
      { x: `${date[1]}`, y: bugCount },
      { x: `${date[2]}`, y: bugCount },
      { x: `${date[3]}`, y: bugCount },
      { x: `${date[4]}`, y: bugCount },
      { x: `${date[5]}`, y: bugCount },
      { x: `${date[6]}`, y: bugCount },
      { x: `${date[7]}`, y: bugCount },
    ],
  ];

  console.log(lineChartData);
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
