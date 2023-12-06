import { FaTrash, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../provider/AppProvider";
import { useNavigate } from "react-router-dom";

const DropdownContent = ({ drug }) => {
  const navigate = useNavigate();
  const { API_URL, verifiedAdmin } = useContext(AppContext);
  const handleDelete = () => {
    console.log(drug._id);
    fetch(`${API_URL}/drugs`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: drug._id.toString() }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleEdit = () => {
    navigate(`/edit/${drug.name}`);
  };
  return (
    <>
      <div className="flex mt-4 shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] dark:shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.2)] rounded-3xl w-min ml-5">
        <div className="bg-gradient-to-b from-primary-color to-[#d8f0ff] text-[#ffffffc5] py-1 px-4 rounded-3xl pb-2 dark:to-[#56585a]">
          Price
        </div>
        <div className="bg-primary py-1 px-3 rounded-3xl pb-2 text-neutral-500 dark:text-slate-400">
          {drug.price}
        </div>
      </div>
      <hr className="mt-5" />
      <div className="ml-5 mt-4 font-normal text-neutral-400 text-xs dark:text-slate-300">
        {drug.desc}
      </div>
      {verifiedAdmin && (
        <div className="flex gap-4 shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] w-min px-4 py-2 mt-4 rounded-3xl dark:shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.2)]">
          <div
            className="text-secondary-color cursor-pointer"
            onClick={handleDelete}
          >
            <FaTrash />
          </div>
          <div className="cursor-pointer" onClick={handleEdit}>
            <FaEdit />
          </div>
        </div>
      )}
    </>
  );
};

export default DropdownContent;
