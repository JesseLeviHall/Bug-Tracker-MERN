import React from "react";
import { useSelector } from "react-redux";
import { selectAllBugs } from "../../../Controllers/Reducers/bugSlice";

const Bar = () => {
  const bugs = useSelector(selectAllBugs);
  const blog = bugs.filter((bug) => bug.webpage === "Blog");
  const commerce = bugs.filter((bug) => bug.webpage === "Shop");
  const auth = bugs.filter((bug) => bug.webpage === "Login");

  const barChartData = [
    [{ x: "BLOG", y: blog.length }],
    [{ x: "ECOMMERCE", y: commerce.length }],
    [{ x: "USER DATA", y: auth.length }],
  ];

  const barCustomSeries = [
    {
      dataSource: barChartData[0],
      xName: "x",
      yName: "y",
      name: "Blog",
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
      name: "Ecomm",
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
      name: "Auth",
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

  return <div></div>;
};

export default Bar;
