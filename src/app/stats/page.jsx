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
  <div className="my-7 container mx-auto">
    <h2 className="font-bold text-5xl">Friendship Analytics</h2>
     <div className="card bg-base-200 my-10 p-6">
    <h2 className="font-bold text-2xl">By Interaction Type</h2>
   <div className="flex justify-center">
      <PieChart  width={400} height={400}>
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
   </div>
   </div>
  </div>
  );
};

export default StatsPage;
