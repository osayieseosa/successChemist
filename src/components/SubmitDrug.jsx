import { useContext } from "react";
import { AppContext } from "../provider/AppProvider";
import { useNavigate } from "react-router-dom";
import Options from "./Options";

const SubmitDrug = () => {
  const { form, setForm, API_URL } = useContext(AppContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    };
    fetch(`${API_URL}/drugs`, requestOptions).then(
      console.log("New Drug Added")
    );
    setForm("");
    navigate("/");
  };

  return (
    <div className="w-full grid justify-center">
      <div className="my-5 shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] max-w-sm py-3 bg-back-color relative rounded-xl px-7 font-bold text-sm text-neutral-400 cursor-pointer dark:shadow-[4px_4px_4px_rgba(0,0,0,.9),-4px_-4px_4px_rgba(255,255,255,.2)] dark:bg-neutral-800">
        <form
          className="grid gap-5 py-5 text-xs"
          onSubmit={handleSubmit}
          id="submitForm"
        >
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="bg-back-color border-2 border-neutral-400 py-2 px-7 dark:bg-neutral-800"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Name"
            required
          />
          <label htmlFor="price" className="sr-only">
            Price
          </label>
          <input
            type="text"
            id="price"
            className="bg-back-color border-2 border-neutral-400 py-2 px-7 dark:bg-neutral-800"
            placeholder="Price"
            onChange={(e) =>
              setForm({ ...form, price: parseInt(e.target.value) })
            }
            required
          />
          <label htmlFor="comnName" className="sr-only">
            Common Name
          </label>
          <input
            id="comnName"
            type="text"
            className="bg-back-color border-2 border-neutral-400 py-2 px-7 dark:bg-neutral-800"
            placeholder="Common Name"
            onChange={(e) => setForm({ ...form, comnName: e.target.value })}
            required
          />
          <label htmlFor="location" className="sr-only">
            Location
          </label>
          <select
            name="locationList"
            id="location"
            form="submitForm"
            className="bg-back-color border-2 border-neutral-400 h-min py-2 px-7 dark:bg-neutral-800"
          >
            <Options value="top right shelf" name="top right shelf" />
            <Options value="top left shelf" name="top right shelf" />
            <Options value="bottom right shelf" name="top right shelf" />
            <Options value="bottom left shelf" name="top right shelf" />
            <Options value="crates" name="top right shelf" />
            <Options value="show glass" name="top right shelf" />
          </select>
          <label htmlFor="category" className="sr-only">
            Category
          </label>
          <select
            name="categoryList"
            id="category"
            form="submitForm"
            className="bg-back-color border-2 border-neutral-400 h-min py-2 px-7 dark:bg-neutral-800"
          >
            <Options name="Common Drugs" value="commonDrugs" />
            <Options name="Drinks" value="drinks" />
            <Options name="Women Health" value="womenHealth" />
            <Options name="Others" value="others" />
          </select>
          <label htmlFor="desc" className="sr-only">
            Category
          </label>
          <textarea
            id="desc"
            className="bg-back-color border-2 border-neutral-400 py-2 px-7 resize-none h-28 dark:bg-neutral-800"
            placeholder="Desc"
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
            required
          />
          <button className="w-52 text-xs bg-[#AEDEFC] border-4 border-blue-50 px-8 py-2 mt-2 rounded-full shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] text-[#fff] dark:shadow-[4px_4px_4px_rgba(0,0,0,.9),-4px_-4px_4px_rgba(255,255,255,.2)] dark:border-neutral-700 dark:text-slate-700">
            Submit Drug
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitDrug;
