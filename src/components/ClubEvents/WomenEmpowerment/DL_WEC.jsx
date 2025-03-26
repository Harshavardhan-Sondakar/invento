import React, { useState } from "react";
import "../css/DL_Common.css";
import DL_Common from "../../common/DL_Common";

const cardImages = [
  "13.png", "12.png", "11.png", "10.png", "9.png", "8.png", "7.png",
  "6.png", "5.png", "4.png", "3.png", "2.png", "1.png"
];

// Event mapping for each card (update links as needed)
const eventLinks = {
  "13.png": "/women-empowerment-club",
  "12.png": "/women-empowerment-club",
  "11.png": "/women-empowerment-club",
  "10.png": "/women-empowerment-club",
  "9.png": "/women-empowerment-club",
  "8.png": "/WomenEmpowerment-events/Nukkad-Natak–(Echoes-of-the-Street)",
  "7.png": "/women-empowerment-club",
  "6.png": "/women-empowerment-club",
  "5.png": "/WomenEmpowerment-events/Face-Painting-Competition–(Carnival-Canvas)",
  "4.png": "/women-empowerment-club",
  "3.png": "/women-empowerment-club",
  "2.png": "/women-empowerment-club",
  "1.png": "/WomenEmpowerment-events/Lone-Star-Spotlight-(Mono-Acting-Competition)",
};

const DL_WEC = () => {
  return (
    <DL_Common eventLinks={eventLinks} Club={"WEC"}></DL_Common>
  );
};

export default DL_WEC;
