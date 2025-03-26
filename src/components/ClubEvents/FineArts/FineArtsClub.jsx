import React, { useState, useEffect } from "react";
import DL_FineArts from "./DL_FineArts";
import ML_FineArts from "./ML_FineArts";

const PlayingCards = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <ML_FineArts /> : <DL_FineArts />;
};

export default PlayingCards;
