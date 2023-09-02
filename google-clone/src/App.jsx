import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routes from "./components/Routes";
import { useState } from "react";

function App() {
  const [darkTheme, SetDarkTheme] = useState(false);

  const toggleDarkTheme = () => {};
  return (
    <>
      <div className={darkTheme ? "dark" : "light"}>
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen light:text-black">
          <Navbar darkTheme={darkTheme} SetDarkTheme={SetDarkTheme} />
          <Routes />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
