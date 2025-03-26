import React, { useState, useEffect } from "react";
import DL_Sports from "./DL_Sports";
import ML_Sports from "./ML_Sports";

const PlayingCards = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <ML_Sports /> : <DL_Sports />;
};

export default PlayingCards;