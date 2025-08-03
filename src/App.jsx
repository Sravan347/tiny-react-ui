import React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter.jsx";
import SearchFunctionality from "./components/SearchFunctionality.jsx";
import Nav from "./components/Nav.jsx";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/search" element={<SearchFunctionality />} />
      </Routes>
    </div>
  );
};

export default App;
