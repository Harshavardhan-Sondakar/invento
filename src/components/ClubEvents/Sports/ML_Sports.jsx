import React, { useState } from "react";
import "../css/ML_Common.css";
import ML_Common from "../../common/ML_Common";

const cardImages = [
  "13.png", "12.png", "11.png", "10.png", "9.png", "8.png", "7.png",
  "6.png", "5.png", "4.png", "3.png", "2.png", "1.png"
];

// Event mapping for each card (update links as needed)
const eventLinks = {
  "13.png": "/sports-club",
  "12.png": "/sports-club",
  "11.png": "/sports-club",
  "10.png": "/sports-club",
  "9.png": "/sports-club",
  "8.png": "/sports-club",
  "7.png": "/sports-club",
  "6.png": "/Sports-events/Carnival-Survival-(Squid-Games)",
  "5.png": "/sports-club",
  "4.png": "/sports-club",
  "3.png": "/sports-club",
  "2.png": "/sports-club",
  "1.png": "/sports-club",
};

const ML_Sports = () => {
          
            return (
              <ML_Common eventLinks={eventLinks} Club={"Sports"} />
        );
};

export default ML_Sports;
