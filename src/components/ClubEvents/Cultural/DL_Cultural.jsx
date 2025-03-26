import React, { useState } from "react";
import DL_Common from "../../common/DL_Common";

const cardImages = [
  "13.png", "12.png", "11.png", "10.png", "9.png", "8.png", "7.png",
  "6.png", "5.png", "4.png", "3.png", "2.png", "1.png"
];

// Event mapping for each card (update links as needed)
const eventLinks = {
  "13.png": "/CulturalClub-events/Symphonica-(Unplugged)",
  "12.png": "/CulturalClub-events/Solo-Instrumental-Non-Percussion",
  "11.png": "/CulturalClub-events/Solo-Instrumental-Percussion",
  "10.png": "/cultural-club",
  "9.png": "/CulturalClub-events/Solo-Singing-IndianClassical",
  "8.png": "/CulturalClub-events/Solo-Singing-Western",
  "7.png": "/CulturalClub-events/Solo-Singing-Eastern",
  "6.png": "/cultural-club",
  "5.png": "/CulturalClub-events/Carnival-Cadence-(GroupDance)",
  "4.png": "/CulturalClub-events/The-Shadow-Waltz-(DuetDance)",
  "3.png": "/cultural-club",
  "2.png": "/CulturalClub-events/Tala-Tarang:Classical(SoloDance-Classical)",
  "1.png": "/CulturalClub-events/Celestial-Cypher:Western-(SoloDance-Showdown)",
};

const DL_Cultural = () => {

  return (
    <DL_Common eventLinks={eventLinks} Club={"Cultural"}></DL_Common>
  );
};

export default DL_Cultural;
