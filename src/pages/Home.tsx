import React, { useEffect } from "react";
import CurrencyConverter from "../components/CurrencyConverter";
import "./Home.css";

const Home: React.FC = () => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error", e);
    }
  }, []);

  return (
    <div className="home-container">
      <img
        style={{ width: "150px", borderRadius: "0%", margin: "0px", padding: "20px" }}
        src="logoahorro.png"
        alt=""
      />
      <CurrencyConverter />

      {/* Banner Adsense fijo abajo */}
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
          textAlign: "center",
        }}
      >
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-4430135984457202"
          data-ad-slot="1239065366"
          data-ad-format="fluid"
          data-ad-layout-key="-fb+5w+4e-db+86"
        ></ins>
      </div>
    </div>
  );
};

export default Home;
