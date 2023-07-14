import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import styles from "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

const NavBar = () => {
  return (
    <>
      <Link className="logo" to={"/"}>
        #VANLIFE
      </Link>
      <nav>
        <Link to={"/about"}>About</Link>
      </nav>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
