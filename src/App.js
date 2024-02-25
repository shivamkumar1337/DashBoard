import Header from "./components/Header";
import Body from "./components/Body";
import Tabs from "./components/Tabs";
import { useState } from "react";
import DataDisplay from "./components/widget/DataDisplay";

function App() {
  const [dataTableList, setDataTableList] = useState([]);

  const addNewDataTable = (graphType,theme) => {
    setDataTableList([
      ...dataTableList,
      <DataDisplay key={dataTableList.length} graphType={graphType} theme={theme}/>,
    ]);
    console.log(theme);
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="w-16"><Header /></div>
      <div className="flex flex-col w-full">
        <Tabs addNewDataTable={addNewDataTable} />
        <div className="overflow-x-auto bg-[#F4F4FF] flex-grow ">
          <Body dataTableList={dataTableList} />
        </div>
      </div>
    </div>
  );
}

export default App;
