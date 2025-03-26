import React, { useState, useEffect } from "react";
import DL_Media from "./DL_Media";
import ML_Media from "./ML_Media";

const MediaClub = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <ML_Media /> : <DL_Media />;
};

export default MediaClub;
