import React from "react";
import CurrencyConverter from "../components/CurrencyConverter";
import PropellerAd from "../components/PropellerAd";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <img
        style={{ width: "150px", borderRadius: "0%", margin: "0px", padding: "20px" }}
        src="logoahorro.png"
        alt=""
      />
      <CurrencyConverter />
      
      {/* Banner Propeller fijo abajo */}
      <div
        className="ad-bottom"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 9999,
          backgroundColor: "#f5f5f5", // opcional
          padding: "5px 0",
        }}
      >
        <PropellerAd />
      </div>
    </div>
  );
};

export default Home;
