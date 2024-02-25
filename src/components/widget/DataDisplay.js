import WidgetTab from "./WidgetTab";
import Table from "./Table";
import React, { useState } from 'react';
import { data } from '../../utils/data';
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";
import PieChart from "./PieChart";

const DataDisplay = ({ graphType, theme }) => {
  const [selectedTab, setSelectedTab] = useState('7d');

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

  const themeClasses = {
    black: "bg-[#282828] text-[#757575] border-[#757575]",
    white: "bg-white text-[#BBBBBB]",
    purple: "bg-[#5E5ADB] text-[#E6E6E6]",
  };

  const headingColor = {
    black: "text-white",
    white: "text-[#5E5ADB]",
    purple: "text-white",
  };

  return (
    <div className={`rounded-lg shadow h-full w-full m-0 p-0 ${themeClasses[theme]}`}>
      <WidgetTab selectedTab={selectedTab} onSelectTab={handleTabSelect}/>
      <div className="flex h-fit w-fit">
        {graphType !== "bar" && graphType !== "line" && graphType !== "pie" && <Table data={data.day[selectedTab].data} headingColor={headingColor[theme]} />}
        {graphType === "bar" && <BarGraph data={data.day[selectedTab].data} headingColor={headingColor[theme]}/>}
        {graphType === "line" && <LineGraph data={data.day[selectedTab].data}/>}
        {graphType === "pie" && <PieChart data={data.day[selectedTab].data}/>}
      </div>
    </div>
  );
};

export default DataDisplay;
