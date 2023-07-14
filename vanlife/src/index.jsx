import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="logo" to={"/"}>
        #VANLIFE
      </Link>
      <Link className="link" to={"/"}>
        Home
      </Link>
      <Link className="link" to={"/about"}>
        About
      </Link>
    </div>
  );
};

const Home = () => {
  return <h1>Hello, React Router!</h1>;
};
const About = () => {
  return <h1>This is a web page</h1>;
};
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
