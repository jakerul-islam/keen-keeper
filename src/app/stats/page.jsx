"use client";
import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip, Cell } from "recharts";
import { FriendsContext } from "@/ContextApi/Provider";

const StatsPage = () => {
  const { callList, videoList, textList } = useContext(FriendsContext);

  const data = [
    { name: "Call", value: callList.length, fill: "#0088FE" },
    { name: "Text", value: textList.length, fill: "#00C49F" },
    { name: "Video", value: videoList.length, fill: "#FFBB28" },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        innerRadius="60%"
        outerRadius="80%"
        cornerRadius="50%"
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      >
        {data.map((entry) => (
          <Cell key={entry.name} fill={entry.fill} />
        ))}
      </Pie>
      <Legend />
      <Tooltip />
    </PieChart>
  );
};

export default StatsPage;
