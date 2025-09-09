import React from "react";
import CurrencyConverter from "../components/CurrencyConverter";
import "./Home.css";
import { useEffect } from "react";

const Home: React.FC = () => {

useEffect(() => {
  const script = document.createElement("script");
  script.async = true;
  script.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  script.setAttribute("crossorigin", "anonymous");
  document.body.appendChild(script);
}, []);
  return (
    <div className="home-container">
      <img
        style={{ width: "150px", borderRadius: "0%", margin: "0px", padding: "20px" }}
        src="logoahorro.png"
        alt=""
      />
      <CurrencyConverter />

      {/* Rectángulo de anuncios */}
      <div className="ad-rectangle">
        {/* Ejemplo con AdSense */}
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "90px" }}
          data-ad-client="ca-pub-4430135984457202"
          data-ad-slot="1239065366"
        ></ins>
      </div>
    </div>
  );
};

export default Home;
