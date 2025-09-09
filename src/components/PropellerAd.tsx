// src/components/PropellerAd.tsx
import React, { useEffect } from "react";

interface PropellerAdProps {
  zoneId?: string; // opcional, por si quieres cambiar el banner desde props
}

const PropellerAd: React.FC<PropellerAdProps> = ({ zoneId = "9846468" }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://groleegni.net/vignette.min.js";
    script.dataset.zone = zoneId;
    script.async = true;

    const container = document.getElementById("propeller-ad-container");
    if (container) {
      container.innerHTML = ""; // limpiar cualquier script anterior
      container.appendChild(script);
    }

    return () => {
      if (container) container.innerHTML = ""; // limpiar al desmontar
    };
  }, [zoneId]);

  return (
    <div
      id="propeller-ad-container"
      style={{
        width: "100%",
        textAlign: "center",
      }}
    />
  );
};

export default PropellerAd;
