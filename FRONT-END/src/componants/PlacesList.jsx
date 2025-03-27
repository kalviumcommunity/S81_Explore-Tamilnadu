// PlacesList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const PlacesList = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/places");
      setPlaces(response.data);
    } catch (error) {
      console.error("Error fetching places:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Places List</h2>
      {places.length === 0 ? <p>No places added yet.</p> : (
        <ul>
          {places.map((place) => (
            <li key={place._id}>
              <h3>{place.name}</h3>
              <p>📍 {place.location}</p>
              <p>{place.description}</p>
              <p>⭐ {place.rating} / 5</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlacesList;
