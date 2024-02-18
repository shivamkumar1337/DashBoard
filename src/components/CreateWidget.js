const CreateWidget = ({ onClose }) => {
  const handleClose = () => {
    onClose(); // Close the popup after submission
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-20 z-50">
      <div className="bg-[#FFFFFF]  h-2/3 w-2/3 rounded-lg shadow-md">
        <div className="flex flex-row h-1/6 border-b border-[#EAECF0]">
          <div className="flex flex-row">
            <div>
                <div>CreateWidget</div>
                <div>Manage the glossary of terms of your Database.</div>
            </div>
          </div>
          <div>
            <button
              className="top-2 right-2 text-gray-600"
              onClick={handleClose}
            >
              X
            </button>
            
          </div>
        </div>
        <div className="flex flex-grow"></div>
      </div>
    </div>
  );
};

export default CreateWidget;
