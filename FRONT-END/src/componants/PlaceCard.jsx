import React from "react";

const PlaceCard = ({ name, location, description, image }) => {
  return (
    <div style={{
      border: "1px solid #ccc", padding: "20px", borderRadius: "10px",
      width: "300px", textAlign: "center", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
    }}>
      <img src={image} alt={name} style={{ width: "100%", borderRadius: "10px" }} />
      <h2>{name}</h2>
      <p><strong>Location:</strong> {location}</p>
      <p>{description}</p>
    </div>
  );
};

export default PlaceCard;
