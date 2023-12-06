import { Outlet } from "react-router-dom";
import CurrentPage from "./CurrentPage";

const Main = () => {
  return (
    <div className="bg-back-color flex flex-col flex-grow w-full overflow-auto dark:bg-neutral-800">
      <CurrentPage />
      <Outlet />
    </div>
  );
};

export default Main;
