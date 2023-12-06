import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../provider/AppProvider";

const ThirdPage = () => {
  const navigate = useNavigate();
  const { role, setRole } = useContext(AppContext);
  const handleRole = (e) => {
    e.preventDefault();
    setRole(e.target.value);
    console.log(role);
    localStorage.setItem("role", e.target.value);
    navigate("/welcome/username");
  };
  return (
    <div className="h-screen min-w-full grid place-content-center bg-back-color">
      <div className="shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] h-80 w-64 bg-back-color px-5 rounded-xl box-border">
        <div className="grid place-items-center relative left-0 w-40 m-[0_auto]">
          <img
            src="../images/logo-color.svg"
            alt="just work"
            className="block w-full h-full object-cover"
          />
        </div>
        <h1 className=" w-48 text-base font-bold text-neutral-500">
          Please state your role
        </h1>
        <div action="">
          <div className="mt-2 mb-1">
            <input
              type="radio"
              className="mr-4 cursor-pointer"
              name="role"
              value="App Admin"
              onClick={handleRole}
              onChange={(e) => {}}
              checked={role.includes("App Admin") ? true : false}
            />
            <label htmlFor="App Admin" className="text-neutral-400 text-sm">
              App Admin
            </label>
          </div>
          <div>
            <input
              type="radio"
              className="mr-4 cursor-pointer rounded-full"
              name="role"
              value="App Tester"
              onClick={handleRole}
              onChange={(e) => {}}
              checked={role.includes("App Tester") ? true : false}
            />
            <label htmlFor="App Tester" className="text-neutral-400 text-sm">
              App Tester
            </label>
          </div>
          <Link to="/welcome/secondpage">
            <div className="text-xs bg-[#AEDEFC] border-4 border-blue-50 px-8 mt-4 py-1 rounded-full shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] text-[#fff] relative float-right select-none">
              Back
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
