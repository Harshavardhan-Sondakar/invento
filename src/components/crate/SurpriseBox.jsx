import React, { useState, useRef } from "react";
import Crosshair from "../Crosshair";
//import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./SurpriseBox.css";

const SurpriseBox = () => {
  const [showPdf, setShowPdf] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const pdfUrl = "/Invento Rule Book 2025.pdf"; // Update this with actual PDF path
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="surprise-container">
      {/* Crosshair Effect */}
      {!showAnimation &&
        <Crosshair containerRef={containerRef} color="#ffffff" className="crosshair" />
      }

      <div
        className="present"
        onMouseEnter={() => {
          setShowPdf(true);
          setShowAnimation(true);
        }}
        onMouseLeave={() => {
          setShowPdf(false);
          setShowAnimation(false);
        }}
      >
        {/* Lid of the Box */}
        <div className="lid">
          <span></span>
        </div>

        {/* PDF Display Area */}
        <div className={`pdf-container ${showPdf ? "show" : ""}`}>
          <embed src={pdfUrl} type="application/pdf" className="pdf-viewer" />
          <a href={pdfUrl} download="INVENTO-2025-Rulebook.pdf" className="download-btn">
            Download PDF
          </a>
        </div>

        {/* Box */}
        <div className="box">
          <span className="box-text"> AIM HERE AND SHOOT!</span>
          <span></span>
        </div>


      </div>

      {showAnimation && (
        <div className="fullscreen-gif">
          <img src="/celebrations.gif" alt="Celebration Animation" />
        </div>
      )}
    </div>
  );
};

export default SurpriseBox;