import React, { useState, useEffect } from "react";
import DL_HR from "./DL_HR";
import ML_HR from "./ML_HR";

const PlayingCards = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <ML_HR /> : <DL_HR />;
};

export default PlayingCards;
