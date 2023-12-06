import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Category from "./Category";
import DrugList from "./DrugList";
import DrugPage from "./DrugPage";
import { useContext, useEffect } from "react";
import { AppContext } from "../provider/AppProvider";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SubmitDrug from "./SubmitDrug";
import EditDrugPage from "./EditDrugPage";
import ProfilePage from "./ProfilePage";

const Home = () => {
  const navigate = useNavigate();
  const {
    drugs,
    menu,
    setMenu,
    fetchDrugs,
    theme,
    setTheme,
    verifiedAdmin,
    setVerifiedAdmin,
    setThemeContent,
    setCurrentPage,
  } = useContext(AppContext);
  setCurrentPage("Categories");
  useEffect(() => {
    if (!localStorage.getItem("name")) {
      navigate("/welcome");
    }
  }, []);
  useEffect(() => {
    fetchDrugs();
  }, [drugs, fetchDrugs]);
  return (
    <div className="relative">
      {menu && (
        <div className="absolute z-20 inset-0 bg-primary-color backdrop-blur-xl dark:bg-neutral-700">
          <div
            className="text-6xl cursor-pointer hover:scale-105 w-min p-3 dark:text-slate-500 text-slate-200"
            onClick={() => {
              setMenu(false);
              setThemeContent(false);
            }}
          >
            <FaTimes />
          </div>
          <ul className="w-full text-center space-y-10 text-2xl font-bold pt-20 text-neutral-600">
            <li
              className="cursor-pointer text-slate-200 dark:hover:text-slate-300 hover:text-slate-100"
              onClick={() => {
                setMenu(false);
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              className="cursor-pointer text-slate-200 dark:hover:text-slate-300 hover:text-slate-100"
              onClick={() => {
                if (theme === "dark") {
                  setTheme("light");
                  localStorage.setItem("theme", "light");
                } else {
                  setTheme("dark");
                  localStorage.setItem("theme", "dark");
                }
                setMenu(false);
              }}
            >
              Toggle Theme
            </li>
            <li
              className="cursor-pointer text-slate-200 dark:hover:text-slate-300 hover:text-slate-100"
              onClick={() => {
                navigate("/drugs/commonDrugs");
                setMenu(false);
              }}
            >
              Products
            </li>
            {!verifiedAdmin && (
              <li
                className="cursor-pointer text-slate-200 dark:hover:text-slate-300 hover:text-slate-100"
                onClick={() => {
                  setMenu(false);
                  navigate("/signIn");
                }}
              >
                Sign In
              </li>
            )}
            {verifiedAdmin && (
              <li
                className="cursor-pointer text-slate-200 dark:hover:text-slate-300 hover:text-slate-100"
                onClick={() => {
                  setVerifiedAdmin(false);
                  localStorage.setItem("verifiedAdmin", JSON.stringify(false));
                  setMenu(false);
                  navigate("/signIn");
                }}
              >
                Sign Out
              </li>
            )}
            {verifiedAdmin && (
              <li
                className="cursor-pointer text-slate-200 dark:hover:text-slate-300 hover:text-slate-100"
                onClick={() => {
                  setMenu(false);
                  navigate("/signUp");
                }}
              >
                Add User
              </li>
            )}
          </ul>
        </div>
      )}
      <div className="bg-back-color h-screen w-full flex flex-col dark:bg-neutral-800">
        <Header />
        <Routes>
          <Route element={<Main />}>
            <Route index element={<Category />} />
            <Route path="drugs/:type" element={<DrugList />} />
            <Route path="drug/:drugName" element={<DrugPage />} />
            <Route path="edit/:drugName" element={<EditDrugPage />} />
            <Route path="submitDrug" element={<SubmitDrug />} />
            <Route path="profilePage" element={<ProfilePage />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
