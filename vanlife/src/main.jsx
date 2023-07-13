import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return <h1>Hello</h1>;
};

<BrowserRouter>
  <Routes>
    <Route path="/" element={App} />
  </Routes>
</BrowserRouter>;

ReactDOM.createRoot(document.getElementById("root")).render();
