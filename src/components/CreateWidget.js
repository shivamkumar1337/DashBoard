import React, { useState } from "react";
import CreateWidgetHeader from "./CreateWidgetHeader";
import baricon from "../utils/baricon.png";
import pieicon from "../utils/pieicon.png";
import Insert from "../utils/Insert.png";
import ccicon from "../utils/ccicon.png";
import Preview from "./Preview";

const CreateWidget = ({ onClose, addNewDataTable }) => {
  const [selectedGraph, setSelectedGraph] = useState(null);
  const [selectedButton, setSelectedButton] = useState('white');

  const handleGraphSelection = (graph) => {
    setSelectedGraph(graph);
  };

  const handleSave = () => {
    addNewDataTable(selectedGraph,selectedButton);
    onClose();
  };
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-20 z-50">
      <div className="bg-white  w-3/6 h-fit rounded-lg shadow-md flex flex-col">
        <CreateWidgetHeader onClose={onClose} />
        <div className="flex flex-grow p-4">
          <Preview selectedGraph={selectedGraph} selectedButton={selectedButton} handleButtonClick={handleButtonClick}/>
          <div className="m-2 w-1/3 flex flex-col justify-between">
            <p className="text-[#888891] text-sm">COMPONENTS</p>
            <div className="flex flex-col">
              <div
                className={`border rounded-lg mb-1 px-4 py-2 cursor-pointer ${
                  selectedGraph === "Data" ? "border-[#5E5ADB] shadow" : "border-[#E4E4E7]"
                }`}
                onClick={() => handleGraphSelection("Data")}
              >
                <p className="text-[#585858]">Data</p>
                <p className="text-[#888891] text-xs">Random Description</p>
              </div>
              <div className={`border rounded-lg mb-1 px-4 py-2 cursor-pointer`}>
                <p className="text-[#585858]">Graph</p>
                <p className="text-[#888891] text-xs">Random Description</p>
                <div className="flex flex-row bg-[#F4F4F5] w-fit rounded-lg ">
                  <div
                    className={`m-0.5 py-0.5 px-3 rounded-lg cursor-pointer ${
                      selectedGraph === "bar" ? "bg-white shadow" : ""
                    }`}
                    onClick={() => handleGraphSelection("bar")}
                  >
                    <img src={baricon} alt="Button 1" className="" />
                  </div>
                  <div
                    className={`m-0.5 py-0.5 px-3 rounded-lg cursor-pointer ${
                      selectedGraph === "line" ? "bg-white shadow" : ""
                    }`}
                    onClick={() => handleGraphSelection("line")}
                  >
                    <img src={Insert} alt="Button 1" className="" />
                  </div>
                  <div
                    className={`m-0.5 py-0.5 px-3 rounded-lg cursor-pointer ${
                      selectedGraph === "pie" ? "bg-white shadow" : ""
                    }`}
                    onClick={() => handleGraphSelection("pie")}
                  >
                    <img src={pieicon} alt="Button 1" className="" />
                  </div>
                </div>
              </div>
              <div
                className={`border rounded-lg mb-1 px-4 py-2 cursor-pointer ${
                  selectedGraph === "Summary" ? "border-[#5E5ADB] shadow" : "border-[#E4E4E7]"
                }`}
                onClick={() => handleGraphSelection("Summary")}
              >
                <p className="text-[#585858]">Summary</p>
                <p className="text-[#888891] text-xs">Random Description</p>
              </div>
            </div>
            <div className="flex flex-row mt-2">
              <button className="border rounded-lg m-1 p-3 w-1/5 bg-[#F8F8FF] border-[#E0DFF8]" onClick={()=>(handleGraphSelection("table"))}>
                {" "}
                <img src={ccicon} alt="Button 1" className="" />
              </button>
              <button className="border rounded-lg m-1 p-3 w-2/5 text-[#585858]" onClick={onClose}>Cancel</button>
              <button className="border rounded-lg m-1 p-3 w-2/5 bg-[#5E5ADB] text-white" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWidget;
