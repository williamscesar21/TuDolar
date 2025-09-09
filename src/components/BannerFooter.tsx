import React, { useEffect } from "react";

const BannerFooter: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://groleegni.net/vignette.min.js";
    script.dataset.zone = "9846468"; // ID del banner
    script.async = true;
    document.getElementById("banner-footer")?.appendChild(script);
  }, []);

  return (
    <div
      id="banner-footer"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        textAlign: "center",
        zIndex: 9999,
        backgroundColor: "#f5f5f5", // opcional
        padding: "5px 0",
      }}
    />
  );
};

export default BannerFooter;
