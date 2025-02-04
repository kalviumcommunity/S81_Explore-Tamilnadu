import React from "react";

function Home() {
    return (
      <div>
        <div 
          className="flex items-center justify-center h-screen bg-cover bg-center" 
          style={{ backgroundImage: "url(https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/kanyakumari-1654195435_bab3b5c9e1fc90ab56a8.webp)", paddingTop: "350px" }}
        >
          <h1 
            className="text-5xl font-semibold flex items-center p-4 rounded text-background-clip"
            style={{ 
              backgroundImage: "url(https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/kanyakumari-1654195435_bab3b5c9e1fc90ab56a8.webp)", 
              padding: "10px",
              color: "white",
              textShadow: "1px 1px 0 black, -2px -2px 2 black, -2px 2px 2 black, 2px -2px 2 black"
            }}
          >
            WELCOME TO TAMILNADU
          </h1>
        </div>
        <div className="flex items-center justify-center mt-4 paddingtop " style={{paddingTop:"100px",paddingBottom:"100px"}}>
          <h1 className="text-3xl font-semibold">
            TOP PLACES IN TAMIL NADU
          </h1>
        </div>
      </div>
    );
}

export default Home;
