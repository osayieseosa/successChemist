import { useState, useContext } from "react";
import { AppContext } from "../provider/AppProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { API_URL } = useContext(AppContext);
  const [name, setName] = useState();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      };

      const response = await fetch(`${API_URL}/register`, requestOptions);
      if (response.ok) {
        setMessage("New User Created");
        setName("");
        setPassword("");
        setEmail("");
        setLoading(false);
      } else if (response.status === "400") {
        setMessage("All Fields Are Required");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="grid place-content-center w-full min-h-screen bg-[url('img/signIn.webp')] bg-neutral-800 object-cover bg-no-repeat bg-cover bg-center">
      <div className="w-64 h-96 bg-gradient-to-r from-[#ffffff82] relative z-10 border-2 to-[#ffffff32] rounded-xl pt-7 pl-7 pr-7">
        <h1 className="text-[#fff] text-xl font-bold py-2">
          Registration Form
        </h1>
        <p className="font-thin text-xs pl-2 bg-green-300 text-slate-100 py-1 rounded-md">
          {message.length ? message : "Please Fill In All Fields"}
        </p>
        <form className="w-full py-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            className="bg-[#ffffff00] text-sm placeholder-[#ffffffd1] text-[#ffffffd1] border-b-2 border-[#ffffff51] outline-none pl-1 mb-2 py-2 w-full"
            onFocus={() => setMessage("")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="bg-[#ffffff00] text-sm placeholder-[#ffffffd1] text-[#ffffffd1] border-b-2 border-[#ffffff51] outline-none pl-1 py-2 w-full"
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setMessage("")}
            value={password}
            required
          />
          <input
            type="text"
            placeholder="Enter Email"
            className="bg-[#ffffff00] text-sm placeholder-[#ffffffd1] text-[#ffffffd1] border-b-2 border-[#ffffff51] outline-none pl-1 mb-6 py-2 w-full"
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setMessage("")}
            value={email}
            required
          />
          <button
            className="cursor-pointer border-2 w-full rounded-full text-sm bg-gradient-to-b from-[#fff] text-[#d66464] py-1"
            type="submit"
            disabled={loading ? true : false}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
          <Link to="/">
            <div className="mt-5 text-xs underline text-slate-100">GO HOME</div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
