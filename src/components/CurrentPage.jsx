import { useContext } from "react";
import { AppContext } from "../provider/AppProvider";

const CurrentPage = () => {
  const { currentPage } = useContext(AppContext);

  return (
    <h1 className="font-bold text-primary-color text-4xl p-2 md:max-w-2xl w-full m-[0_auto]">
      {currentPage}
    </h1>
  );
};

export default CurrentPage;
