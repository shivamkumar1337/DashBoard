import Navitembutton from "../utils/Navitembutton.png"
const CreateWidgetHeader = ({ onClose }) => {
    const handleClose = () => {
      onClose();
    };
    
    return (
      <div className="flex flex-row p-7 justify-between items-center h-1/6 border-b border-[#EAECF0]">
        <div className="flex flex-row items-center space-x-2">
        <img src={Navitembutton} alt="Button 1" className="" />
          <div>
            <div className="text-lg font-semibold text-[#5E5ADB]">Create Widget</div>
            <div className="text-sm text-[#888891]">Manage the glossary of terms of your Database.</div>
          </div>
        </div>
  
        <div className="flex flex-col items-end space-x-2">
          <button className="text-gray-600" onClick={handleClose}>
            X
          </button>
          <div className="px-1.5 py-1 border border-[#CBD5E1] rounded-lg text-sm">
          <input type="text" className="text-[#898989]" />
          <text className="text-[#A0A0A0] m-1">X</text>
        </div></div>
      </div>
    );
  };
  
  export default CreateWidgetHeader;
  