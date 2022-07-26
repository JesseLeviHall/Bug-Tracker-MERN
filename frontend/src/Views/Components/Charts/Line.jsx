import React from "react";
import { useSelector } from "react-redux";
import { selectAllBugs } from "../../../Controllers/Reducers/bugSlice";
import moment from "moment";

const LineChart = () => {
  const bugs = useSelector(selectAllBugs);

  const date = bugs.map((bug) => [moment(bug.time).format("YYYY, DD, MM")]);

  const lineChartData = [
    [
      { x: `${date[0]}`, y: 4 },
      { x: `${date[1]}`, y: 14 },
      { x: `${date[2]}`, y: 11 },
      { x: `${date[3]}`, y: 12 },
      { x: `${date[4]}`, y: 5 },
      { x: `${date[5]}`, y: 2 },
      { x: `${date[6]}`, y: 2 },
      { x: `${date[7]}`, y: 1 },
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
    intervalType: "Weeks",
    edgeLabelPlacement: "Shift",
    majorGridLines: { width: 0 },
    background: "#03e9f4",
  };

  const LinePrimaryYAxis = {
    labelFormat: "{value}",
    rangePadding: "None",
    minimum: 0,
    maximum: 20,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };

  return <div></div>;
};

export default LineChart;
