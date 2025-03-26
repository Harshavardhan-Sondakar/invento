import React, { useState, useEffect } from "react";
import "../css/ML_Common.css";
import ML_Common from "../../common/ML_Common";

const cardImages = [
  "13.png", "12.png", "11.png", "10.png", "9.png", "8.png", "7.png",
  "6.png", "5.png", "4.png", "3.png", "2.png", "1.png"
];

const eventLinks = {
  "13.png": "/community-development-club",
  "12.png": "/community-development-club",
  "11.png": "/CommunityDevelopment-events/Clash-Of-Valo-Masters",
  "10.png": "/community-development-club",
  "9.png": "/community-development-club",
  "8.png": "/community-development-club",
  "7.png": "/community-development-club",
  "6.png": "/community-development-club",
  "5.png": "/CommunityDevelopment-events/Fight-Of-Carnival-Rivals",
  "4.png": "/community-development-club",
  "3.png": "/community-development-club",
  "2.png": "/CommunityDevelopment-events/Carnival-Fest",
  "1.png": "/community-development-club",
};

const ML_Community = () => {
  return (
    <ML_Common eventLinks={eventLinks} Club={"CDC"} />  
  );
};

export default ML_Community;
