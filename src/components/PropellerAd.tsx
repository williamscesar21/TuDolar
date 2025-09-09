// PropellerAd.tsx
import { useEffect } from "react";

const PropellerAd: React.FC = () => {
  useEffect(() => {
    // Crear el script
    const script = document.createElement("script");
    script.dataset.zone = "9846385"; // tu zone ID
    script.src = "https://groleegni.net/vignette.min.js";
    script.async = true;

    // Agregarlo al body
    document.body.appendChild(script);

    // Limpiar cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // no necesitamos renderizar nada
};

export default PropellerAd;
