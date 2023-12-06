import { useNavigate } from "react-router-dom";

const FirstPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full grid place-content-center bg-back-color">
      <div className="shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] h-80 w-64 bg-back-color px-5 rounded-xl box-border">
        <div className="grid place-items-center relative left-0 w-40 m-[0_auto]">
          <img
            src="../images/logo-color.svg"
            alt="just work"
            className="relative w-full"
          />
        </div>
        <div className="mt-1">
          <h1 className=" w-48 text-base font-bold text-neutral-500">
            Welcome to success chemist
          </h1>
          <p className="text-xs mt-2 ml-2 text-neutral-400">
            To make your experience better we require you to answer a few
            questions
          </p>
          <button
            className="text-xs bg-[#AEDEFC] border-4 border-blue-50 px-8 mt-4 py-1 rounded-full shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] text-[#fff] relative float-right"
            onClick={() => navigate("/welcome/secondpage")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
