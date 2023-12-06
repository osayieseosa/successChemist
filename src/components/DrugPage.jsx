import { useParams, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../provider/AppProvider";
import DropdownContent from "./DropdownContent";
const DrugPage = () => {
  const { drugs, setCurrentPage } = useContext(AppContext);
  const { drugName } = useParams();
  const drug = drugs.find(
    (drug) => drug.name.toString() === drugName.toString()
  );
  setCurrentPage("Drug");

  return (
    <div className="w-full grid h-full">
      {drug ? (
        <div className="shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] w-80 py-3 bg-blue-50 relative rounded-xl px-7 font-bold text-sm text-neutral-500 hover:scale-105 cursor-pointer h-min dark:bg-neutral-800 dark:shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.2)] m-[15px_auto]">
          <div className="flex justify-between">
            <div>{drug.name}</div>
          </div>
          <DropdownContent drug={drug} />
        </div>
      ) : (
        <Navigate to="/404" replace={true} />
      )}
    </div>
  );
};

export default DrugPage;
