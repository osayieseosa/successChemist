import { useContext, useEffect, useState } from "react";
import {
  FaSun,
  FaSearch,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaMoon,
} from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { AppContext } from "../provider/AppProvider";
const Header = () => {
  const navigate = useNavigate();
  const {
    name,
    drugs,
    setDarkMode,
    setTheme,
    theme,
    verifiedAdmin,
    themeContent,
    setThemeContent,
  } = useContext(AppContext);
  const [themeHover, setThemeHover] = useState(false);
  const [leftHover, setLeftHover] = useState(false);
  const [leftContent, setLeftContent] = useState(false);
  const [rightHover, setRightHover] = useState(false);
  const [rightContent, setRightContent] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filteredResults =
      search === ""
        ? []
        : drugs.filter(
            (drug) =>
              drug.name
                .toString()
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              drug.comnName
                .toString()
                .toLowerCase()
                .includes(search.toLowerCase())
          );
    setSearchResults(filteredResults);
  }, [drugs, search]);

  const onFocus = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="w-full bg-[url('img/header.png')] rounded-b-3xl relative px-10 py-5 bg-neutral-800 object-cover bg-no-repeat bg-cover bg-center dark:bg-[url('img/darkHeader.jpg')]">
      <div className="z-1 relative max-w-2xl m-[0_auto]">
        <div className="flex justify-between">
          <div className="w-min flex gap-3">
            <div className="bg-secondary-color w-12 rounded-full h-12 grid place-content-center">
              <h1 className="w-min text-white font-bold text-xl tracking-widest select-none">
                {name.slice(0, 1).toString() +
                  name.slice(-2, -1).toUpperCase().toString()}
              </h1>
            </div>
            <div className="w-48">
              <h1 className="font-bold text-[#fff] text-lg select-none">
                Hello {name}
              </h1>

              <p className="text-[#fff] text-sm select-none">
                {verifiedAdmin ? "App Admin" : "App Tester"}
              </p>
            </div>
          </div>

          <div className="relative">
            {themeHover && (
              <div className="absolute bg-neutral-600 py-2 px-2 w-24 right-0 grid place-content-center top-full rounded-lg text-slate-200 z-10 text-xs">
                Choose Theme
              </div>
            )}
            {theme === "light" ? (
              <FaSun
                className="text-[#ffffffb7] h-full cursor-pointer"
                onMouseOver={() => setThemeHover(true)}
                onMouseOut={() => setThemeHover(false)}
                onClick={() => {
                  setThemeContent(!themeContent);
                  setThemeHover(false);
                }}
              />
            ) : (
              <FaMoon
                className="text-[#ffffffb7] h-full cursor-pointer"
                onMouseOver={() => setThemeHover(true)}
                onMouseOut={() => setThemeHover(false)}
                onClick={() => {
                  setThemeContent(!themeContent);
                  setThemeHover(false);
                }}
              />
            )}
            {themeContent && (
              <ul className="absolute bg-neutral-600 z-10 right-0 text-slate-200 w-24 rounded-lg overflow-hidden">
                <li
                  className="leading-10 w-full text-center hover:bg-neutral-800 cursor-pointer flex"
                  onClick={() => {
                    if (theme === "dark") {
                      setDarkMode(false);
                      setTheme("light");
                      localStorage.setItem("theme", "light");
                    } else {
                      return;
                    }
                  }}
                >
                  <div className="grid place-content-center px-2">
                    <FaSun />
                  </div>
                  Light
                </li>
                <li
                  className="leading-10 w-full text-center hover:bg-neutral-800 cursor-pointer flex"
                  onClick={() => {
                    if (theme === "light") {
                      setDarkMode(false);
                      setTheme("dark");
                      localStorage.setItem("theme", "dark");
                    } else {
                      return;
                    }
                  }}
                >
                  <div className="grid place-content-center px-2">
                    <FaMoon />
                  </div>
                  Dark
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="pt-7 flex gap-1">
          <div className="h-full flex p-3 rounded-full bg-gradient-to-r from-[#f7f7f7cb] to-[#ffffff41] border-2 border-[#ffffff77]">
            {searchResults.length <= 0 ? (
              <FaSearch className="text-[#fff] text-[rgba(255,255,255,0.67)]" />
            ) : (
              <FaTimes
                className="text-[#fff] text-[#ffffffab] cursor-pointer"
                onClick={() => setSearch("")}
              />
            )}
          </div>
          <div className="relative flex flex-grow">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-full px-5 py-2 bg-transparent bg-gradient-to-r from-[#f7f7f7cb] to-[#ffffff41] border-2 border-[#ffffff77] placeholder-white outline-none text-white backdrop-blur-3xl dark:text-[#ffffffab] dark:placeholder-[#ffffffab] dark:from-[#ffffff41] dark:to-[#d2d2d2cb]"
              onFocus={onFocus}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            {!(searchResults.length <= 0) && (
              <ul className="absolute top-[calc(100%+10px)] w-full px-12 py-7 z-10  text-neutral-600 dark:text-white font-semibold text-xs bg-gradient-to-r from-[#f7f7f7cb] to-[#ffffff41] backdrop-blur-3xl border-neutral-400 border-b-2 divide-y h-[50vh] overflow-auto rounded-tr-3xl dark:to-[#505050c8]">
                <div className="text-center py-4">Results</div>
                {searchResults.map((searchResult) => (
                  <Link
                    to={`/drug/${searchResult.name}`}
                    onClick={() => setSearch("")}
                  >
                    <li
                      key={searchResult._id.slice(0, 9)}
                      className="hover:text-primary-color hover:scale-105 cursor-pointer flex justify-between py-4"
                    >
                      {searchResult.name}
                      <div className="grid place-content-center">
                        <FaArrowRight />
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="text-[#fff] flex gap-8 mt-7 w-full justify-center cursor-pointer">
          <div className="hover:scale-105 relative">
            {leftHover && (
              <div className="absolute bg-neutral-600 py-2 px-2 w-24 right-0 grid place-content-center top-full rounded-lg text-slate-200 z-10 text-xs mt-">
                Navigate Left
              </div>
            )}

            <FaArrowLeft
              onClick={() => {
                navigate(-1);
                setLeftContent(!leftContent);
                setLeftHover(false);
              }}
              onMouseOver={() => setLeftHover(true)}
              onMouseOut={() => setLeftHover(false)}
              className="dark:text-slate-300"
            />
          </div>
          <div className="hover:scale-105 relative">
            {rightHover && (
              <div className="absolute bg-neutral-600 py-2 px-2 w-24 left-0 grid place-content-center top-full rounded-lg text-slate-200 z-10 text-xs mt-2">
                Navigate right
              </div>
            )}
            <FaArrowRight
              onClick={() => {
                navigate(+1);
                setRightContent(!rightContent);
                setRightHover(false);
              }}
              onMouseOver={() => setRightHover(true)}
              onMouseOut={() => setRightHover(false)}
              className="dark:text-slate-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
