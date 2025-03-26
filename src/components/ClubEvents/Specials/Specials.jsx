import React, { useState, useEffect } from "react";
import DL_Specials from "./DL_Specials";
import ML_Specials from "./ML_Specials";

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

  return isMobile ? <ML_Specials /> : <DL_Specials/>;
};

export default PlayingCards;
