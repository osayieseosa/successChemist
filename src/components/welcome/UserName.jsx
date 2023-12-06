import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../provider/AppProvider";

const UserName = () => {
  const navigate = useNavigate();
  const { name, setName, role } = useContext(AppContext);
  const HandleName = () => {
    localStorage.setItem("name", name);
    if (role.includes("App Tester")) {
      navigate("/");
    } else {
      navigate("/signIn");
    }
  };
  return (
    <div className="min-h-screen min-w-full grid place-content-center bg-blue-50">
      <div className="shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] h-80 w-64 bg-blue-50 px-5 rounded-xl">
        <div className="grid place-items-center relative left-0 w-40 m-[0_auto]">
          <img
            src="../images/logo-color.svg"
            alt="just work"
            className="block w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className=" w-48 text-base font-bold text-neutral-500">
            Please provide your first name
          </h1>
        </div>
        <div className="w-44 mt-1">
          <input
            type="text"
            placeholder="Name"
            className=" bg-transparent border-b-2 border-primary-color p-2 outline-none placeholder-slate-300 text-slate-300 w-full"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button
          className="text-xs bg-[#AEDEFC] border-4 border-blue-50 px-8 mt-4 py-1 rounded-full shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] text-[#fff] relative float-right mr-5"
          onClick={HandleName}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserName;
