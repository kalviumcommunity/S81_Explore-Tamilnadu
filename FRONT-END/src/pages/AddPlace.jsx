// AddPlace.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddPlaces.css";


const AddPlace = () => {
  const [place, setPlace] = useState({
    name: "",
    location: "",
    description: "",
    rating: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPlace({ ...place, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/places", place);
      alert("Place added successfully!");
      navigate("/placelist");
    } catch (error) {
      console.error("Error adding place:", error);
    }
  };

  return (
    <div className="add-place-container">
      <div className="add-place-card">
        <h2>Add a New Place</h2>
        
        <form onSubmit={handleSubmit} className="add-place-form">
          <input type="text" name="name" placeholder="Place Name" value={place.name} onChange={handleChange} required />
          <input type="text" name="location" placeholder="Location" value={place.location} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={place.description} onChange={handleChange}></textarea>
          <input type="number" name="rating" placeholder="Rating (0-5)" min="0" max="5" value={place.rating} onChange={handleChange} />

          <button type="submit">Add Place</button>
        </form>
      </div>
    </div>
  );
};

export default AddPlace;
