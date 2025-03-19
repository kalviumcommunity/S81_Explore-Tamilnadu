import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PlaceCard from "./componants/PlaceCard";
import Home from "./componants/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/place" element={<PlaceCard />} />
      </Routes>
    </Router>
  );
}

export default App;