import { FaUser, FaHome, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../provider/AppProvider";

const Footer = () => {
  const { setMenu } = useContext(AppContext);
  return (
    <div className="w-full px-5 py-2 rounded-t-2xl bg-back-color shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] text-primary-color z-10 dark:bg-neutral-800 dark:shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.2)]">
      <div className="w-min flex gap-10 max-w-2xl m-[0_auto]">
        <Link to="/profilePage">
          <div className="h-min p-4 bg-white rounded-full shadow-[4px_4px_12px_rgba(0,0,0,.25),-4px_-4px_1px_rgba(255,255,255,.9),inset_0_0_5px_rgba(0,0,0,.3)] border-2 border-[#908f8faf] dark:bg-neutral-900 dark:shadow-[4px_4px_12px_rgba(0,0,0,.8),-4px_-4px_8px_rgba(255,255,255,.2),inset_0_0_5px_rgba(0,0,0,.9)]">
            <FaUser className="text-lg" />
          </div>
        </Link>
        <Link to="/">
          <div className="h-min p-4 bg-white rounded-full shadow-[4px_4px_12px_rgba(0,0,0,.25),-4px_-4px_1px_rgba(255,255,255,.9),inset_0_0_5px_rgba(0,0,0,.3)] border-2 border-[#908f8faf] dark:bg-neutral-900 dark:shadow-[4px_4px_12px_rgba(0,0,0,.8),-4px_-4px_8px_rgba(255,255,255,.2),inset_0_0_5px_rgba(0,0,0,.9)]">
            <FaHome />
          </div>
        </Link>
        <div
          className="h-min p-4 bg-white rounded-full shadow-[4px_4px_12px_rgba(0,0,0,.25),-4px_-4px_1px_rgba(255,255,255,.9),inset_0_0_5px_rgba(0,0,0,.3)] border-2 border-[#908f8faf] dark:bg-neutral-900 dark:shadow-[4px_4px_12px_rgba(0,0,0,.8),-4px_-4px_8px_rgba(255,255,255,.2),inset_0_0_5px_rgba(0,0,0,.9)]"
          onClick={() => setMenu(true)}
        >
          <FaPlus />
        </div>
      </div>
    </div>
  );
};

export default Footer;
