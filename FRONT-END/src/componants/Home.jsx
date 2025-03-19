// Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{
      height: "98vh",
      width: "99vw",
      backgroundImage: "url(https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/hills-1655135460_4c4f0c31bd2fac094f93.webp)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      color: "white",
      textAlign: "center",
      margin: "0",
      padding: "0"
    }}>
      <h1>Welcome to Tamil Nadu Tourism</h1>
      <Link to="/place">
        <button 
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#ff5722",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px"
          }}
        >
          Explore
        </button>
      </Link>
    </div>
  );
};

export default Home;