import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../provider/AppProvider";

const Question1 = () => {
  const navigate = useNavigate();
  const { gender, setGender } = useContext(AppContext);
  const handleGender = (e) => {
    setGender(e.target.value);
    navigate("/welcome/thirdpage");
    localStorage.setItem("gender", e.target.value);
  };
  return (
    <div className="h-screen w-full grid place-content-center bg-back-color object-cover">
      <div className="shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] h-80 w-64 bg-back-color px-5 rounded-xl box-border">
        <div className="grid place-items-center relative left-0 w-40 m-[0_auto]">
          <img
            src="../images/logo-color.svg"
            alt="just work"
            className="block w-full h-full object-cover"
          />
        </div>
        <h1 className=" w-48 text-base font-bold text-neutral-500">
          What is your gender
        </h1>
        <form>
          <div className="mt-2 mb-1">
            <input
              type="radio"
              onChange={(e) => {}}
              className="mr-4 cursor-pointer"
              name="gender"
              value="male"
              onClick={handleGender}
              checked={gender.includes("male") ? true : false}
            />
            <label htmlFor="male" className="text-neutral-400">
              Male
            </label>
          </div>
          <div>
            <input
              type="radio"
              className="mr-4 cursor-pointer rounded-full"
              name="gender"
              value="female"
              onClick={handleGender}
              onChange={(e) => {}}
              checked={gender.includes("female") ? true : false}
            />
            <label htmlFor="female" className="text-neutral-400">
              Female
            </label>
          </div>
          <Link to="/welcome">
            <button className="text-xs bg-[#AEDEFC] border-4 border-blue-50 px-8 mt-4 py-1 rounded-full shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] text-[#fff] relative float-right">
              Back
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Question1;
