import DataDisplay from "./widget/DataDisplay";

const Preview = ({ selectedGraph,selectedButton ,handleButtonClick}) => {


  return (
    <div className="m-2 w-2/3 bg-[#E0DFF8] rounded-lg flex flex-col justify-center items-center">
      <div className="m-2 h-fit w-fit text-sm">
        <DataDisplay graphType={selectedGraph} theme={selectedButton}/>
      </div>
      <div className="m-2 flex justify-center items-center">
        <div
          className={`flex justify-center items-center rounded-full w-4 h-4 mr-2 cursor-pointer ${
            selectedButton === 'black' ? 'border-2 border-white' : ''
          } bg-[#282828]`}
          onClick={() => handleButtonClick('black')}
        ></div>
        <div
          className={`flex justify-center items-center rounded-full w-4 h-4 mr-2 cursor-pointer ${
            selectedButton === 'white' ? 'border-2 border-white' : ''
          } bg-[#CECECE]`}
          onClick={() => handleButtonClick('white')}
        ></div>
        <div
          className={`flex justify-center items-center rounded-full w-4 h-4 cursor-pointer ${
            selectedButton === 'purple' ? 'border-2 border-white' : ''
          } bg-[#5E5ADB]`}
          onClick={() => handleButtonClick('purple')}
        ></div>
      </div>
    </div>
  );
};

export default Preview;
