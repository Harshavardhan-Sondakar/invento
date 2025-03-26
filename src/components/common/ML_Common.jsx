import React, { useState, useEffect } from "react";
import "../ClubEvents/css/ML_Common.css";

const cardImages = [
    "13.png", "12.png", "11.png", "10.png", "9.png", "8.png", "7.png",
    "6.png", "5.png", "4.png", "3.png", "2.png", "1.png"
  ];

  const ML_Common = ({ eventLinks, Club }) =>{

console.log("bhuiwebuiuewgbui",eventLinks, window.location.pathname);
  const [isHovered, setIsHovered] = useState(false);


  const handleClick = (image) => {
    window.location.href = eventLinks[image];
  };

  const startHoldTimer = (image) => {
    if (true) {
      handleClick(image);
    } else {
      const timer = setTimeout(() => handleClick(image), 2000);
      return timer;
    }
  };

  return (
    <div className="ml-cardCon">
      <div
        className="ml-stack-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {cardImages.map((image, index) => (
            eventLinks[image] !== window.location.pathname && (
                <div
                className="ml-stack-card"
                key={index}
                style={{ "--i": index - 6 }}
                onMouseDown={() => startHoldTimer(image)}
                onMouseUp={() => clearTimeout(startHoldTimer(image))}
                onMouseLeave={() => clearTimeout(startHoldTimer(image))}
                onClick={() => handleClick(image)}
                >
                <img src={`/${Club}/${image}`} alt={`Card ${image}`} />
                </div>
            )
            ))}


      </div>
      <div className="ml-hold-note">
        {isHovered && !true && <p>Click and hold the correct card to proceed!</p>}
      </div>
    </div>
  );
};

export default ML_Common;
