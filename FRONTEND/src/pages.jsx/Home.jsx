import React from "react";

function Home() {
    return (
      <div 
        className="flex items-center justify-center h-screen bg-cover bg-center" 
        style={{ backgroundImage: "url(https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/kanyakumari-1654195435_bab3b5c9e1fc90ab56a8.webp)", paddingTop: "350px" }}
      >
        <h1 
          className="text-5xl font-semibold flex items-center p-4 rounded text-background-clip"
          style={{ backgroundImage: "url(https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/kanyakumari-1654195435_bab3b5c9e1fc90ab56a8.webp)" }}
        >
          WELCOME TO TAMILNADU
        </h1>
      </div>
    );
}

export default Home;
