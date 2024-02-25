import NavItem0 from "../utils/NavItem0.png";
import NavItem1 from "../utils/NavItem1.png";
import NavItem2 from "../utils/NavItem2.png";
import NavItem3 from "../utils/NavItem3.png";
import L2493 from "../utils/L2493.png";
import Avatar from "../utils/Avatar.png";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-16 z-10 flex flex-col bg-[#FFFFFF] border border-[#EAECF0] justify-between p-2">
      <div className="flex flex-col mt-2">
        <button className="flex-none m-2">
          <img src={L2493} alt="logo" className="w-10 h-10" />
        </button>
        <button className="flex-none m-2">
          <img src={NavItem0} alt="Button 1" className="w-10 h-10" />
        </button>
        <button className="flex-none m-2">
          <img src={NavItem1} alt="Button 2" className="w-10 h-10" />
        </button>
        <button className="flex-none m-2">
          <img src={NavItem2} alt="Button 3" className="w-10 h-10" />
        </button>
        <button className="flex-none m-2">
          <img src={NavItem3} alt="Button 4" className="w-10 h-10" />
        </button>
      </div>
      <div className="flex-none mb-2">
        <button className="flex-none m-2">
          <img src={Avatar} alt="Button 4" className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
};

export default Header;
