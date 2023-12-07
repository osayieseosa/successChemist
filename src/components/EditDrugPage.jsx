import { useContext, useState } from "react";
import { AppContext } from "../provider/AppProvider";
import { useNavigate, useParams } from "react-router-dom";
import Options from "./Options";

const EditDrugPage = () => {
  const { drugName } = useParams();
  const { drugs, fetchDrugs, API_URL } = useContext(AppContext);
  const drug = drugs.find(
    (drug) => drug.name.toString() === drugName.toString()
  );
  const navigate = useNavigate();
  const [editForm, setEditForm] = useState({
    id: drug._id,
    name: drug.name,
    price: drug.price,
    comnName: drug.comnName,
    location: drug.location,
    category: drug.category,
    desc: drug.desc,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editForm),
    };
    fetch(`${API_URL}/drugs`, requestOptions)
      .then(setEditForm(""))
      .then(navigate(-1))
      .then(fetchDrugs());
  };

  return (
    <div className="w-full grid justify-center">
      <div className="my-5 shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] max-w-sm py-3 bg-back-color relative rounded-xl px-7 font-bold text-sm text-neutral-400 cursor-pointer dark:shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.2)] dark:bg-neutral-800">
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
            className="bg-inherit border-2 border-neutral-400 py-2 px-7"
            value={editForm.name}
            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
            placeholder="Name"
            required
          />
          <label htmlFor="price" className="sr-only">
            Price
          </label>
          <input
            type="text"
            id="price"
            className="bg-inherit border-2 border-neutral-400 py-2 px-7"
            value={editForm.price}
            placeholder="Price"
            onChange={(e) =>
              setEditForm({ ...editForm, price: parseInt(e.target.value) })
            }
            required
          />
          <label htmlFor="comnName" className="sr-only">
            Common Name
          </label>
          <input
            id="comnName"
            type="text"
            className="bg-inherit border-2 border-neutral-400 py-2 px-7"
            value={editForm.comnName}
            placeholder="Common Name"
            onChange={(e) =>
              setEditForm({ ...editForm, comnName: e.target.value })
            }
            required
          />
          <label htmlFor="location" className="sr-only">
            Location
          </label>
          <select
            name="locationList"
            id="location"
            form="submitForm"
            onChange={(e) =>
              setEditForm({ ...editForm, location: e.target.value })
            }
            className="bg-inherit border-2 border-neutral-400 h-min py-2 px-7"
          >
            <Options value={drug.location} name="Please select a value" />
            <Options value="top right shelf" name="Top right shelf" />
            <Options value="top left shelf" name="Top left shelf" />
            <Options value="bottom right shelf" name="Bottom right shelf" />
            <Options value="bottom left shelf" name="Bottom left shelf" />
            <Options value="crates" name="Crates" />
            <Options value="show glass" name="Show Glass" />
          </select>
          <label htmlFor="category" className="sr-only">
            Category
          </label>
          <select
            name="categoryList"
            id="category"
            form="submitForm"
            Value={drug.category}
            className="bg-inherit border-2 border-neutral-400 h-min py-2 px-7"
            onChange={(e) =>
              setEditForm({ ...editForm, category: e.target.value })
            }
          >
            <Options value={drug.category} name="Please select a value" />
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
            className="bg-inherit border-2 border-neutral-400 py-2 px-7 resize-none h-28"
            value={editForm.desc}
            placeholder="Desc"
            onChange={(e) => setEditForm({ ...editForm, desc: e.target.value })}
            required
          />
          <button className="w-52 text-xs bg-[#AEDEFC] border-4 border-blue-50 px-8 py-2 mt-2 rounded-full shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] text-[#fff] dark:shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.2)] dark:border-neutral-800 dark:text-neutral-800">
            Submit Drug
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditDrugPage;
