import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen min-w-full grid place-content-center bg-blue-50 relative">
      <div className="h-full w-full absolute">
        <img
          src="./images/notFound.webp"
          className=" w-full h-full brightness-50 object-cover block"
        />
      </div>
      <div className="h-min w-min z-10 px-3">
        <h1 className=" text-9xl text-neutral-300 font-extrabold">404</h1>
        <p className=" text-xs mt-2 text-neutral-200 relative">
          <span className="text-xl italic">OOPS!</span> The page your'e looking
          for cannot be found.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="m-[0 auto] text-xs border-2 border-blue-50 px-8 py-3 rounded-full text-[#fff] relative float-right mt-2"
        >
          Take Me Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
