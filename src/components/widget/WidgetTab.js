import { data } from '../../utils/data';

const WidgetTab = ({ selectedTab, onSelectTab, headingColor }) => {
  const tabs = Object.keys(data.day);

  return (
    <div className="flex border-b border-[#E1E1E1]">
      {tabs.map(tab => (
        <button 
          key={tab} 
          className={`p-2 ${selectedTab === tab ? 'border-b-2 border-[#5E5ADB]' : 'border-b-0 border-[#E1E1E1]'} ${headingColor}`}
          onClick={() => onSelectTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default WidgetTab;
