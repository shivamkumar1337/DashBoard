import React, { useState } from 'react';
import Home from "../utils/Home.png";
import Plus from "../utils/Plus.png";
import Cross from "../utils/Cross.png";
import Settings from "../utils/Settings.png";
import CreateWidget from './CreateWidget';

const Tabs = () => {
  const [isCreateWidgetOpen, setIsCreateWidgetOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleAddWidgetClick = () => {
    setIsCreateWidgetOpen(true);
    // <CreateWidget/>
  };

  const handleCloseAddWidget = () => {
    setIsCreateWidgetOpen(false);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="flex flex-row bg-[#FFFFFF] border border-[#EAECF0] justify-between p-1">
      <div className="flex flex-row">
        <button 
          className={`flex items-center justify-center m-1 p-2 w-10 rounded-lg ${selectedButton === 'logo' ? 'bg-[#F7F6FD] text-[#5E5ADB]' : 'text-[#8D8D8D]'} `}
          onClick={() => handleButtonClick('logo')}
        >
          <img src={Home} alt="logo" className="" />
        </button>
        <button 
          className={`flex items-center justify-center m-1 p-2 rounded-lg border border-[#E0DFF8] ${selectedButton === 'overview' ? 'bg-[#F7F6FD] text-[#5E5ADB]' : 'text-[#8D8D8D]'} `}
          onClick={() => handleButtonClick('overview')}
        >
          Overview
          {selectedButton === 'overview' && <img src={Cross} alt="cross" className="ml-1" />}
        </button>
        <button 
          className={`flex items-center justify-center m-1 p-2 rounded-lg border border-[#E0DFF8] ${selectedButton === 'customers' ? 'bg-[#F7F6FD] text-[#5E5ADB]' : 'text-[#8D8D8D]'} `}
          onClick={() => handleButtonClick('customers')}
        >
          Customers
          {selectedButton === 'customers' && <img src={Cross} alt="cross" className="ml-1" />}
        </button>
        <button 
          className={`flex items-center justify-center m-1 p-2 rounded-lg border border-[#E0DFF8] ${selectedButton === 'products' ? 'bg-[#F7F6FD] text-[#5E5ADB]' : 'text-[#8D8D8D]'} `}
          onClick={() => handleButtonClick('products')}
        >
          Products
          {selectedButton === 'products' && <img src={Cross} alt="cross" className="ml-1" />}
        </button>
        <button 
          className={`flex items-center justify-center m-1 p-2 rounded-lg border border-[#E0DFF8] ${selectedButton === 'settings' ? 'bg-[#F7F6FD] text-[#5E5ADB]' : 'text-[#8D8D8D]'} `}
          onClick={() => handleButtonClick('settings')}
        >
          Settings
          {selectedButton === 'settings' && <img src={Cross} alt="cross" className="ml-1" />}
        </button>
        <button 
          className={`flex items-center justify-center m-1 p-2 h-10 w-10 rounded-lg border border-[#E0DFF8] bg-[#F7F6FD]`}
        >
          <img src={Plus} alt="plus" className="" />
        </button>
      </div>
      <div className="flex flex-row">
        <button 
          className={`flex flex-row items-center justify-center m-1 p-2 rounded-lg border border-[#E0DFF8]  text-[#5E5ADB] bg-[#F7F6FD] `}
          onClick={handleAddWidgetClick}
        >
          <img src={Plus} alt="plus" className="mr-1" />
          Add Widget
        </button>
        <button className="flex items-center justify-center m-1 p-2 text-gray-700">
          <img src={Settings} alt="settings" className="" />
        </button>
        {isCreateWidgetOpen && <CreateWidget onClose={handleCloseAddWidget} />}
      </div>
    </div>
  );
};

export default Tabs;
