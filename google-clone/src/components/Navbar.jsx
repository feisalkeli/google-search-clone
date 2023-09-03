import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ darkTheme, setDarkTheme, toggleDarkTheme }) => {
  return (
    <div className="p-5 pb-0  flex flex-wrap sm:justify-center items-center border-b dark:border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-blue-500 font-bold text-white py-1 rounded px-2 dark:bg-transparent">
            {" "}
            Searchify
            <span></span>
          </p>
          <div></div>
        </Link>
        <button
          type="button"
          onClick={() => toggleDarkTheme(darkTheme)}
          className="px-6 py-3  full bg:white dark:bg-zinc-800 dark:text-white rounded-full flex justify-end flex-row"
        >
          {darkTheme ? "Light 💡" : "Dark🌛 "}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
