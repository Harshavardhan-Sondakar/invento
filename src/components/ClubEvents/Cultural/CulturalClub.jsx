import React, { useState, useEffect } from "react";
import DL_Cultural from "./DL_Cultural";
import ML_Cultural from "./ML_Cultural";

const PlayingCards = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    // Set initial value on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <ML_Cultural /> : <DL_Cultural />;
};

export default PlayingCards;
