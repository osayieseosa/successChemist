import { AppContext } from "../provider/AppProvider";
import { useContext } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import DropdownContent from "./DropdownContent";

const Drug = ({ filteredCategory }) => {
  const { dropDownContent, setDropDownContent } = useContext(AppContext);
  return (
    <div className="flex flex-col flex-grow overflow-y-auto py-3 ">
      <div className="m-[20px_auto] flex flex-col flex-grow gap-7 md:grid md:grid-cols-2 max-w-2xl">
        {filteredCategory.map((drug) => (
          <div
            key={drug._id}
            className="shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] py-5 bg-blue-50 relative rounded-xl px-7 font-bold text-sm text-neutral-500 hover:scale-105 cursor-pointer dark:shadow-[4px_4px_4px_rgba(0,0,0,.9),-4px_-4px_4px_rgba(255,255,255,.2)] dark:bg-neutral-800 dark:text-slate-300 w-64 h-min sm:w-80"
          >
            <div
              className="flex justify-between"
              onClick={() => {
                if (dropDownContent.toString() === drug._id.toString()) {
                  setDropDownContent("");
                } else {
                  setDropDownContent(drug._id);
                }
              }}
            >
              <div>
                {drug.name.length >= 20
                  ? `${drug.name.slice(0, 20)}...`
                  : drug.name}
              </div>
              <div className="flex place-items-center h-full cursor-pointer">
                {dropDownContent === drug._id ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {dropDownContent === drug._id && <DropdownContent drug={drug} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drug;
