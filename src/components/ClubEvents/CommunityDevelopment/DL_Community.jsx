import React, { useState, useEffect } from "react";
import "../css/DL_Common.css";

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

const DL_Community = () => {
  const [holdTimer, setHoldTimer] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleInteraction = (image) => {
    if (isMobile) {
      window.location.href = eventLinks[image];
    } else {
      const timer = setTimeout(() => {
        window.location.href = eventLinks[image]; // Redirect after 1s hold
      }, 1000);
      setHoldTimer(timer);
    }
  };

  const cancelHold = () => {
    if (holdTimer) clearTimeout(holdTimer);
  };

  return (
    <div className="dl-cardCon">
      <div
        className="dl-stack-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {cardImages.map((image, index) => (
          <div
            className="dl-stack-card"
            key={index}
            style={{ "--i": index - 6 }}
            onMouseDown={() => !isMobile && handleInteraction(image)}
            onMouseUp={cancelHold}
            onMouseLeave={cancelHold}
            onClick={() => isMobile && handleInteraction(image)}
          >
            <img src={`/CDC/${image}`} alt={`Card ${image}`} />
          </div>
        ))}
      </div>

      <div className="dl-hold-note">
        {isHovered && !isMobile && <p>Click and hold the correct card to proceed!</p>}
      </div>
    </div>
  );
};

export default DL_Community;
