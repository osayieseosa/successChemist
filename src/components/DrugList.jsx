import { useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import { AppContext } from "../provider/AppProvider";
import Drug from "./Drug";

const DrugList = () => {
  const { drugs, setCurrentPage } = useContext(AppContext);

  const { type } = useParams();
  if (type === "commonDrugs") {
    setCurrentPage("Common Drugs");
  } else if (type === "drinks") {
    setCurrentPage("Drinks");
  } else if (type === "womenHealth") {
    setCurrentPage("Women Health");
  } else if (type === "others") {
    setCurrentPage("Others");
  } else {
    setCurrentPage("404");
  }
  if (drugs.length) {
    drugs.sort((a, b) => a.name.localeCompare(b.name));
    const filterComnDrugs = drugs.filter((drug) =>
      drug.category.toString().toLowerCase().includes("common")
    );
    const filterDrinks = drugs.filter((drug) =>
      drug.category.toString().toLowerCase().includes("drinks")
    );
    const filterWomen = drugs.filter((drug) =>
      drug.category.toString().toLowerCase().includes("women health")
    );
    const filterOthers = drugs.filter((drug) =>
      drug.category.toString().toLowerCase().includes("others")
    );
    const content =
      type === "commonDrugs" ? (
        <Drug filteredCategory={filterComnDrugs} />
      ) : type === "drinks" ? (
        <Drug filteredCategory={filterDrinks} />
      ) : type === "womenHealth" ? (
        <Drug filteredCategory={filterWomen} />
      ) : type === "others" ? (
        <Drug filteredCategory={filterOthers} />
      ) : (
        <Navigate to="/404" replace />
      );
    return content;
  } else {
    const content = "Loading...";
    return content;
  }
};

export default DrugList;
