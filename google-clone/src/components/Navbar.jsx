import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0  flex flex-wrap sm:justify-center items-center border-b dark:border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-blue-500 font-bold text-white py-1 rounded px-2 dark:bg-gray-500">
            {" "}
            Searchify
            <span></span>
          </p>
          <button type="button" onClick={() => setDarkTheme(darkTheme)}>
            {darkTheme ? "Dark" : "Light"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
