import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Results from "./components/Results";
import News from "./components/News";
import Videos from "./components/Videos";
import Images from "./components/Images";

import { useState } from "react";

function App() {
  const [darkTheme, SetDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    SetDarkTheme(!darkTheme);
  };
  return (
    <Router>
      <div className={darkTheme ? "dark" : "light"}>
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen light:text-black">
          <Navbar darkTheme={darkTheme} toggleDarkTheme={toggleDarkTheme} />
        </div>
      </div>
      <Footer />
      <Routes>
        <Route path="/" />
        <Route path="/search" element={<Search />} />

        <Route path="/images" element={<Images />} />

        <Route path="/news" element={<News />} />

        <Route path="/videos" element={<Videos />} />
        {/* <Route path="/footer" element={<Footer />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
