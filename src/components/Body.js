import Card from "./Card";
import Tabs from "./Tabs";

const Body=()=>{
   return (
   <div className="flex flex-col flex-grow bg-[#F4F4FF]">
        <Tabs/>
        <div className=" flex flex-grow m-5">
        <Card/>
        </div>
      </div>)
}

export default Body;