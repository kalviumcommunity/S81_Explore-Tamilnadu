import React from "react";

const PlaceCard = () => {
  const place = {
    name: "Meenakshi Temple",
    location: "Madurai, Tamil Nadu",
    description: "One of the most famous temples in India, known for its stunning architecture.",
    image: "https://www.india.com/wp-content/uploads/2018/08/25india-tourism-meenakshi-temple-madurai.jpg"
  };

  return (
    <div style={{
      border: "1px solid #ccc", padding: "20px", borderRadius: "10px",
      width: "300px", textAlign: "center", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
      margin: "50px auto"
    }}>
      <img src={place.image} alt={place.name} style={{ width: "100%", borderRadius: "10px" }} />
      <h2>{place.name}</h2>
      <p><strong>Location:</strong> {place.location}</p>
      <p>{place.description}</p>
    </div>
  );
};

export default PlaceCard;
