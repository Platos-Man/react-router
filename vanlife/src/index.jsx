import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

const Home = () => {
  return <h1>Hello, React Router!</h1>;
};
const About = () => {
  return <h1>This is a web page</h1>;
};
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
