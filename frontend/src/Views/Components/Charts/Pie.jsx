import React from "react";
import { useSelector } from "react-redux";
import { selectAllBugs } from "../../../Controllers/Reducers/bugSlice";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";

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

  return (
    <AccumulationChartComponent
      id={bugs.id}
      legendSettings={{ visible: legendVisiblity, background: "#03e9f4" }}
      height="full"
      tooltip={{ enable: true }}>
      <Inject
        services={[
          AccumulationLegend,
          PieSeries,
          AccumulationDataLabel,
          AccumulationTooltip,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Bug Status"
          dataSource={pieChartData}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",
            font: {
              fontWeight: "600",
              color: "yellow",
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Pie;
