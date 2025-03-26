import React, { useState, useEffect } from "react";
import DL_TE from "./DL_TE";
import ML_TE from "./ML_TE";

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

  return isMobile ? <ML_TE /> : <DL_TE/>;
};

export default PlayingCards;
