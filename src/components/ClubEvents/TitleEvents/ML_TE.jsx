import React, { useState } from "react";
import "../css/ML_Common.css";
import ML_Common from "../../common/ML_Common";
const cardImages = [
  "13.png", "12.png", "11.png", "10.png", "9.png", "8.png", "7.png",
  "6.png", "5.png", "4.png", "3.png", "2.png", "1.png"
];

// Event mapping for each card (update links as needed)
const eventLinks = {
  "13.png": "/title-events",
  "12.png": "/title-events",
  "11.png": "/title-events",
  "10.png": "/title-events",
  "9.png": "/title-events",
  "8.png": "/title-events/Muscle-monarch-(Best-Physique)",
  "7.png": "/title-events",
  "6.png": "/title-events",
  "5.png": "/title-events",
  "4.png": "/title-events/Mr.& Ms.Invento",
  "3.png": "/title-events",
  "2.png": "/title-events",
  "1.png": "/title-events",
};

const ML_Community = () => {
  const [holdTimer, setHoldTimer] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseDown = (image) => {
    const timer = setTimeout(() => {
      window.location.href = eventLinks[image]; // Redirect after 2s hold
    }, 2000);
    setHoldTimer(timer);
  };

  const handleMouseUp = () => {
    if (holdTimer) {
      clearTimeout(holdTimer); // Cancel redirection if released early
    }
  };

  return (
    <ML_Common eventLinks={eventLinks} Club={"TitleEvents"} />
  );
};

export default ML_Community;