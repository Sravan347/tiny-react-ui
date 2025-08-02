import React from "react";
import { Routes,Route } from "react-router-dom";
import Counter from "./components/Counter.jsx";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/counter" element={<Counter/>} />
      </Routes>
    </div>
  );
};

export default App;
