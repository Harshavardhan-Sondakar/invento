import React, { useState, useEffect } from "react";
import DL_Community from "./DL_Community";
import ML_Community from "./ML_Community";

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

  return isMobile ? <ML_Community /> : <DL_Community/>;
};

export default PlayingCards;
