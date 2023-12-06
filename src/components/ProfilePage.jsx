import { useContext } from "react";
import { AppContext } from "../provider/AppProvider";
import Options from "./Options";

const ProfilePage = () => {
  const { name, setName, gender, setGender, setCurrentPage } =
    useContext(AppContext);
  setCurrentPage("Profile Page");
  return (
    <div className="w-full grid justify-center">
      <div className="my-5 shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.5)] py-7 bg-back-color relative rounded-xl px-7 font-bold text-sm text-neutral-400 cursor-pointer w-min flex flex-col gap-5 dark:bg-neutral-800 dark:shadow-[4px_4px_4px_rgba(0,0,0,.25),-4px_-4px_4px_rgba(255,255,255,.2)]">
        <label htmlFor="name" className="text-accent-color">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="border-b-2 bg-inherit border-neutral-400 py-2 px-7 outline-none"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            localStorage.setItem("name", e.target.value);
          }}
          placeholder="Name"
          required
        />
        <label htmlFor="gender" className="text-accent-color">
          Gender
        </label>
        <select
          id="role"
          className="bg-inherit border-b-2 border-neutral-400 py-2 px-7 outline-none"
          onChange={(e) => {
            setGender(e.target.value);
            localStorage.setItem("gender", e.target.value);
          }}
        >
          <Options value={gender} name={gender} />
          <hr />
          <Options value="male" name="male" />
          <Options value="female" name="female" />
        </select>
      </div>
    </div>
  );
};

export default ProfilePage;
