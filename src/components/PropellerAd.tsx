import React, { useEffect } from "react";

const PropellerAd: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");

    // Esto reemplaza lo que te dieron
    script.innerHTML = `(function(s){
      s.dataset.zone='9846385',
      s.src='https://groleegni.net/vignette.min.js'
    })([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="ad-bottom" />; // div para colocar el anuncio
};

export default PropellerAd;
