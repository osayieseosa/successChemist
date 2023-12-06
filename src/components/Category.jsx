import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../provider/AppProvider";
const Category = () => {
  const { verifiedAdmin } = useContext(AppContext);
  return (
    <div className="flex flex-col h-full overflow-y-auto py-5">
      <div className="m-[10px_auto] grid gap-4 md:grid-cols-2 max-w-2xl ">
        {verifiedAdmin && (
          <Link to="/submitDrug">
            <div className="dark:shadow-[4px_4px_4px_rgba(0,0,0,.9),-4px_-4px_4px_rgba(255,255,255,.2)] shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] w-64 py-5 dark:bg-neutral-800 relative rounded-xl text-center cursor-pointer text-sm font-bold text-secondary-color bg-blue-50">
              Add New Drug
            </div>
          </Link>
        )}
        <Link to="/drugs/commonDrugs">
          <div className="shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] py-5 bg-blue-50 relative rounded-xl text-center cursor-pointer text-sm font-bold dark:shadow-[4px_4px_4px_rgba(0,0,0,.9),-4px_-4px_4px_rgba(255,255,255,.2)] dark:bg-neutral-800 dark:text-slate-300 text-neutral-600 w-64">
            Common drugs
          </div>
        </Link>
        <Link to="/drugs/drinks">
          <div className="shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] py-5 bg-blue-50 relative rounded-xl text-center cursor-pointer text-sm font-bold dark:shadow-[4px_4px_4px_rgba(0,0,0,.9),-4px_-4px_4px_rgba(255,255,255,.2)] dark:bg-neutral-800 dark:text-slate-300 text-neutral-600 w-64">
            Drinks
          </div>
        </Link>
        <Link to="/drugs/womenHealth">
          <div className="shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] py-5 bg-blue-50 relative rounded-xl text-center cursor-pointer text-sm font-bold dark:shadow-[4px_4px_4px_rgba(0,0,0,.9),-4px_-4px_4px_rgba(255,255,255,.2)] dark:bg-neutral-800 dark:text-slate-300 text-neutral-600 w-64">
            Women Health
          </div>
        </Link>
        <Link to="/drugs/others">
          <div className="shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] py-5 bg-blue-50 relative rounded-xl text-center cursor-pointer text-sm font-bold dark:shadow-[4px_4px_4px_rgba(0,0,0,.9),-4px_-4px_4px_rgba(255,255,255,.2)] dark:bg-neutral-800 dark:text-slate-300 text-neutral-600 w-64">
            Others
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
