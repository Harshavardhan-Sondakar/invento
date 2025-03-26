import React, { useState } from "react";
import "../css/DL_Common.css";
import DL_Common from "../../common/DL_Common";

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

const DL_TE = () => {
  
  return (
    <DL_Common eventLinks={eventLinks} Club={"TitleEvents"}></DL_Common>
  );
};

export default DL_TE;