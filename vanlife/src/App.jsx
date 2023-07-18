import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import NavBar from "./components/NavBar";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans vans={vans} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
