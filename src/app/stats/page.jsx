"use client";

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const DonutChart = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("timeline")) || [];
    setTimeline(storedData);
  }, []);

  const counts = {
    text: timeline.filter((item) => item.type === "text").length,
    video: timeline.filter((item) => item.type === "video").length,
    call: timeline.filter((item) => item.type === "call").length,
  };

  const data = [
    { name: "Text", value: counts.text, color: "#7C3AED" },
    { name: "Video", value: counts.video, color: "#2F855A" },
    { name: "Call", value: counts.call, color: "#084933" },
  ];

  return (
    <div className="container mx-auto px-4">
    
      <h2 className="text-2xl sm:text-3xl md:text-4xl mt-10">
        Friendship Analytics
      </h2>


      <div className="shadow mt-6 sm:mt-10 p-4 sm:p-6 md:p-10 bg-white rounded-xl">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          By Interaction Type
        </h2>

       
        <div className="w-full h-62.5 sm:h-62.5 md:h-62.5">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius="50%"
                outerRadius="75%"
                paddingAngle={6}
                cornerRadius={8}
                stroke="none"
                isAnimationActive={true}
                animationBegin={200}
                animationDuration={1200}
                animationEasing="ease-out"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

     
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-6">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              ></span>
              <span className="text-sm sm:text-base md:text-lg font-medium text-gray-700">
                {entry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonutChart;