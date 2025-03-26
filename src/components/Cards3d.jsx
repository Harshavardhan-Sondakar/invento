import { useState } from 'react';
import './Cards3d.css';
import { useNavigate } from 'react-router-dom';

const Card3DRotation = ({ frontTitle, frontText, backTitle, backText, frontImage, backImage,link }) => {
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    if (clickCount === 0) {
      setClickCount(1); // First click rotates the card
    } else {
      navigate(link); // Second click navigates to the new page
    }
  };

  return (
    <div className="body3d">
      <div className="cards-wrapper">
        <div className="card-container">
          <div className={`card ${clickCount === 1 ? "rotated" : ""}`} onClick={handleClick}>
            <div
              className="card-contents card-front"
              style={{ backgroundImage: `url(${frontImage})` }}
            >
              <div className="card-depth">
                <h2>{frontTitle}</h2>
                <hr />
                <p>{frontText}</p>
              </div>
            </div>
            <div
              className="card-contents card-back"
              style={{ backgroundImage: `url(${backImage})` }}
            >
              <div className="card-depth">
                <h2 className="cham">{backTitle}</h2>
                <hr />
                <p>{backText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Card3DRotation;