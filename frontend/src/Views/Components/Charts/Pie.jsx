import React from "react";
import { useSelector } from "react-redux";
import { selectAllBugs } from "../../../Controllers/Reducers/bugSlice";

const Pie = (legendVisiblity) => {
  const bugs = useSelector(selectAllBugs);

  const resolved = bugs.filter((bug) => bug.complete === true);
  const active = bugs.filter((bug) => bug.complete === false);

  const pieChartData = [
    {
      x: "Resolved",
      y: `${resolved.length}`,
      text: "Resolved",
    },
    {
      x: "Pending",
      y: `${active.length}`,
      text: "Pending",
    },
  ];

  return <div></div>;
};

export default Pie;
