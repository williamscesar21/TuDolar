import React from "react";
import CurrencyConverter from "../components/CurrencyConverter";
import "./Home.css";
import PropellerAd from "../components/PropellerAd";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <img
        style={{ width: "150px", borderRadius: "0%", margin: "0px", padding: "20px" }}
        src="logoahorro.png"
        alt=""
      />
      <CurrencyConverter />
      <div className="ad-bottom">
        <PropellerAd />
      </div>

    </div>
  );
};

export default Home;
