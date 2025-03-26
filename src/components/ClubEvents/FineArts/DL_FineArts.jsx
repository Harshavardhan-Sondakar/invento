
import React, { useState } from "react";
import DL_Common from "../../common/DL_Common";

const cardImages = [
  "13.png", "12.png", "11.png", "10.png", "9.png", "8.png", "7.png",
  "6.png", "5.png", "4.png", "3.png", "2.png", "1.png"
];

// Event mapping for each card (update links as needed)
const eventLinks = {
  "13.png": "/fineArts-club",
  "12.png": "/FineArts-events/Juton-Ka-Jalwa–Step-Into-Art,Walk-With-Creativity!",
  "11.png": "/fineArts-club",
  "10.png": "/fineArts-club",
  "9.png": "/fineArts-club",
  "8.png": "/FineArts-events/Chitrakar-Mela–Where-Every-Stroke-Tells-a-Story!",
  "7.png": "/fineArts-club",
  "6.png": "/fineArts-club",
  "5.png": "/fineArts-club",
  "4.png": "/FineArts-events/Rangilo-Matka–Where-Colors-Meet-Clay,Creativity-Takes-Flight!",
  "3.png": "/fineArts-club",
  "2.png": "/fineArts-club",
  "1.png": "/fineArts-club",
};

const DL_FineArts = () => {

  return (
    <DL_Common eventLinks={eventLinks} Club={"FineArts"}></DL_Common>
  );
};

export default DL_FineArts;