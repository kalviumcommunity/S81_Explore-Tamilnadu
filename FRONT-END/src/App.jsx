import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to Explore Tamil Nadu 🌍</h1>
      <p>Discover the beauty, culture, and history of Tamil Nadu with our AI-powered tourism platform.</p>
      <img 
        src="https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/1-1658836440_e22b34e778a0d0cc8f59.webp" 
        alt="Tamil Nadu Tourism" 
        style={{ width: "80%", borderRadius: "10px", margin: "20px 0" }} 
      />
      <button style={{ padding: "10px 20px", fontSize: "18px", cursor: "pointer" }}>
        Explore Now
      </button>
    </div>
  );
}

export default App;
