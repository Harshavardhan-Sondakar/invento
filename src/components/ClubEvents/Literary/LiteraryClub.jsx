import React, { useState, useEffect } from "react";
import DL_Literary from "./DL_Literary";
import ML_Literary from "./ML_Literary";

const PlayingCards = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <ML_Literary /> : <DL_Literary />;
};

export default PlayingCards;
