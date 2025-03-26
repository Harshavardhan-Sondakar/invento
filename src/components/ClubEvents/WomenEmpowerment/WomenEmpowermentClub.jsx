import React, { useState, useEffect } from "react";
import DL_WEC from "./DL_WEC";
import ML_WEC from "./ML_WEC";

const PlayingCards = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <ML_WEC /> : <DL_WEC />;
};

export default PlayingCards;