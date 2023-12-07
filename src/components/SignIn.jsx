import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { AppContext } from "../provider/AppProvider";

const SignIn = () => {
  const { verifiedAdmin, setVerifiedAdmin, API_URL } = useContext(AppContext);
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [view, setView] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("verifiedAdmin") === "Admin") {
      navigate("/");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const corsOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
      };

      const response = await fetch(`${API_URL}/login`, corsOptions);
      if (response.ok) {
        setName("");
        setPassword("");
        setLoading(false);
        setVerifiedAdmin(true);
        localStorage.setItem("verifiedAdmin", verifiedAdmin);
        navigate("/");
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="grid place-content-center w-full min-h-screen bg-[url('img/signIn.webp')] bg-neutral-800 object-cover bg-no-repeat bg-cover bg-center">
      <div className="w-72 h-80 bg-gradient-to-r from-[#ffffff82] relative z-10 border-2 to-[#ffffff32] rounded-xl py-7 px-7">
        <h1 className="text-[#fff] text-3xl font-bold">Login</h1>
        <p className="text-xs font-semibold text-neutral-400 pb-4 pt-2 pl-2">
          Welcome Back Please Login to Your Account
        </p>
        <form className="pl-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="bg-[#ffffff00] text-lg placeholder-[#ffffffd1] text-[#ffffffd1] border-b-2 border-[#ffffff51] outline-none pl-1 mb-2 py-1 w-full"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex w-full mb-6 gap-5">
            <input
              type={view ? "text" : "password"}
              placeholder="Password"
              className="bg-[#ffffff00] text-lg placeholder-[#ffffffd1] text-[#ffffffd1] border-b-2 border-[#ffffff51] outline-none pl-1 py-1 w-44"
              onChange={(e) => setPassword(e.target.value)}
            />
            {view ? (
              <div
                className="cursor-pointer py-2 h-min text-blue-400"
                onClick={() => setView(!view)}
              >
                <FaEyeSlash />
              </div>
            ) : (
              <div
                className="cursor-pointer py-2 h-min text-blue-500"
                onClick={() => setView(!view)}
              >
                <FaRegEye />
              </div>
            )}
          </div>
          <button
            type="submit"
            className="border-2 w-full rounded-full text-sm bg-gradient-to-b from-[#fff] text-[#d66464] py-2 font-bold"
          >
            {loading ? "Verifying..." : "Submit"}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
