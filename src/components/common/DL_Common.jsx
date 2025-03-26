import React, { useState } from "react";
import "../ClubEvents/css/DL_Common.css"

const cardImages = [
  "13.png", "12.png", "11.png", "10.png", "9.png", "8.png", "7.png",
  "6.png", "5.png", "4.png", "3.png", "2.png", "1.png"
];

const DL_Common = ({ eventLinks, Club }) => {
  // activeCard holds the image name of the currently selected card
  const [activeCard, setActiveCard] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = (image) => {
    if (activeCard === image) {
      // If the card is already active, proceed with redirection
      window.location.href = eventLinks[image];
    } else {
      // Set the clicked card as active
      setActiveCard(image);
    }
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
            className={`dl-stack-card ${activeCard === image ? "active" : ""}`}
            key={index}
            style={{ "--i": index - 6 }}
            onClick={() => handleCardClick(image)}
          >
            <img src={`/${Club}/${image}`} alt={`Card ${image}`} />
          </div>
        ))}
      </div>

      <div className="dl-hold-note">
        {isHovered && (
          <p>Tap once to select a card. Tap it again to proceed!</p>
        )}
      </div>
    </div>
  );
};

export default DL_Common;
