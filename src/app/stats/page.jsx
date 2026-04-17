"use client";
import React, { useContext, useEffect, useState } from "react";
import { Legend, Pie, PieChart, Tooltip, Cell } from "recharts";
import { FriendsContext } from "@/ContextApi/Provider";

const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
};

const StatsPage = () => {
  const { callList, videoList, textList } = useContext(FriendsContext);
  const { width } = useWindowSize();

  const data = [
    { name: "Call", value: callList.length, fill: "#0088FE" },
    { name: "Text", value: textList.length, fill: "#00C49F" },
    { name: "Video", value: videoList.length, fill: "#FFBB28" },
  ];

  const chartSize = width < 400 ? 260 : width < 640 ? 320 : 400;

  return (
    <div className="my-7 container mx-auto px-4">
      <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl">
        Friendship Analytics
      </h2>
      <div className="card bg-base-200 my-6 sm:my-10 p-4 sm:p-6">
        <h2 className="font-bold text-xl sm:text-2xl">By Interaction Type</h2>
        <div className="flex justify-center items-center w-full overflow-hidden">
          <PieChart width={chartSize} height={chartSize}>
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