import React from "react";
// import PlaceCard from "./components/PlaceCard";
import PlaceCard from "./componants/PlaceCard";

function App() {
  const place = {
    name: "Meenakshi Temple",
    location: "Madurai, Tamil Nadu",
    description: "One of the most famous temples in India, known for its stunning architecture.",
    image: "https://www.india.com/wp-content/uploads/2018/08/25india-tourism-meenakshi-temple-madurai.jpg"
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <PlaceCard {...place} />
    </div>
  );
}

export default App;
