import React, { useState } from "react";
import "../css/ML_Common.css";
import ML_Common from "../../common/ML_Common";
const cardImages = [
    "13.png", "12.png", "11.png", "10.png", "9.png", "8.png", "7.png",
    "6.png", "5.png", "4.png", "3.png", "2.png", "1.png"
  ];
  
  // Event mapping for each card (update links as needed)
  const eventLinks = {
    "13.png": "/literary-club",
    "12.png": "/literary-club",
    "11.png": "/Literary-events/Kuch-Alfaaz-Hamare-Bhi",
    "10.png": "/literary-club",
    "9.png": "/literary-club",
    "8.png": "/Literary-events/Ringmaster’s-Riddle-Run",
    "7.png": "/literary-club",
    "6.png": "/literary-club",
    "5.png": "/Literary-events/Freakshow-Face-Off",
    "4.png": "/literary-club",
    "3.png": "/literary-club",
    "2.png": "/Literary-events/Whispers-of-Literary-Mystery",
    "1.png": "/literary-club",
  };

const ML_Literary = () => {    
        return (
          <ML_Common eventLinks={eventLinks} Club={"Literary"} />
        );
};

export default ML_Literary;
