import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PlaceCard from "./componants/PlaceCard";
import Home from "./componants/Home";
import PlacesList from "./componants/PlacesList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/place" element={<PlaceCard />} />
        <Route path="/placelist" element={<PlacesList/>}/>
      </Routes>
    </Router>
  );
}

export default App;