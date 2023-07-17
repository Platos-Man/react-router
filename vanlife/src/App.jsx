import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import NavBar from "./components/NavBar";

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans").then((data) => setVans(data));
    console.log(vans);
  }, []);

  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
