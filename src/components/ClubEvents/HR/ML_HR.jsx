import React, { useState } from "react";
import "../css/ML_Common.css";
import ML_Common from "../../common/ML_Common";

const cardImages = [
    "13.png", "12.png", "11.png", "10.png", "9.png", "8.png", "7.png",
    "6.png", "5.png", "4.png", "3.png", "2.png", "1.png"
  ];
  
  // Event mapping for each card (update links as needed)
  const eventLinks = {
    "13.png": "/hr-club",
    "12.png": "/hr-club",
    "11.png": "/HumanResource-events/The-Wicked-Ad-Circus-(Ad-Mad)",
    "10.png": "/hr-club",
    "9.png": "/hr-club",
    "8.png": "/hr-club",
    "7.png": "/hr-club",
    "6.png": "/HumanResource-events/The-Jester's-Joust-(Debate)",
    "5.png": "/hr-club",
    "4.png": "/hr-club",
    "3.png": "/hr-club",
    "2.png": "/hr-club",
    "1.png": "/HumanResource-events/The-Addams-Press-(Mock-Press)",
  };

const ML_HR = () => {    
      return (
        <ML_Common eventLinks={eventLinks} Club={"HR"} />
  );
};

export default ML_HR;
