import React, { useState } from "react";
import "../css/DL_Common.css";
import DL_Common from "../../common/DL_Common";

const cardImages = [
    "13.png", "12.png", "11.png", "10.png", "9.png", "8.png", "7.png",
    "6.png", "5.png", "4.png", "3.png", "2.png", "1.png"
  ];
  
  // Event mapping for each card (update links as needed)
  const eventLinks = {
    "13.png": "/media-club",
    "12.png": "/media-club",
    "11.png": "/Media-club/Reel-Rhapsody-(Reel-Making)",
    "10.png": "/media-club",
    "9.png": "/media-club",
    "8.png": "/media-club",
    "7.png": "/media-club",
    "6.png": "/Media-club/Snapshot-Spectacle-(Photography)",
    "5.png": "/media-club",
    "4.png": "/media-club",
    "3.png": "/media-club",
    "2.png": "/Media-club/Carnival-Chronicles-(Short-Film)",
    "1.png": "/media-club",
};

const DL_Media = () => { 
      return (
        <DL_Common eventLinks={eventLinks} Club={"Media"}></DL_Common>
      );
};

export default DL_Media;
