import React, { useState, useEffect } from "react";
import "./Map.css";
import map from "/map-image.jpg";

const locations = [
  { id: 1, name: "Administrative Building" },
  { id: 2, name: "Library Building" },
  { id: 3, name: "Mechanical Engineering Department" },
  { id: 4, name: "Main Building" },
  { id: 5, name: "E&C Department" },
  { id: 6, name: "Old Boys Hostel" },
  { id: 7, name: "New Boys Hostel" },
  { id: 8, name: "Canteen & Mess" },
  { id: 9, name: "Generator" },
  { id: 10, name: "Two Wheeler Parking" },
  { id: 11, name: "Apple Garden" },
  { id: 12, name: "Canara Bank" },
  { id: 13, name: "Civil Engineering Department" },
  { id: 14, name: "Workshop" },
  { id: 15, name: "Water Tank" },
  { id: 16, name: "Two Wheeler Parking" },
  { id: 17, name: "ATM" },
  { id: 18, name: '"A" Type Quarters' },
  { id: 19, name: '"B" Type Quarters' },
  { id: 20, name: "Girls Hostels" },
  { id: 21, name: "Girls Hostels" },
  { id: 22, name: '"C" Type Quarters' },
  { id: 23, name: "Principal's Quarters" },
  { id: 24, name: "MBA Department & Class Rooms" },
  { id: 25, name: "Indoor Games" },
  { id: 26, name: "Concert" },
  { id: 27, name: "Playground" },
];

const CollegeMap = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [mapRotate, setMapRotate] = useState({ x: 0, y: 0 });

  // Title 3D Rotation
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const rotateX = ((clientY - centerY) / centerY) * 15;
    const rotateY = ((clientX - centerX) / centerX) * -15;

    setRotate({ x: rotateX, y: rotateY });
  };

  // Map Image 3D Rotation (Mouse & Gyroscope)
  const handleMapMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = ((e.clientY - centerY) / centerY) * 10;
    const rotateY = ((e.clientX - centerX) / centerX) * -10;

    setMapRotate({ x: rotateX, y: rotateY });
  };

  useEffect(() => {
    const handleDeviceMotion = (event) => {
      const { gamma, beta } = event;
      setMapRotate({ x: beta / 5, y: gamma / 5 });
    };

    if (window.DeviceMotionEvent) {
      window.addEventListener("deviceorientation", handleDeviceMotion);
    }
    return () => {
      window.removeEventListener("deviceorientation", handleDeviceMotion);
    };
  }, []);

  return (
    <div className="college-map-container">
      <h1
        className="title-3d"
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      >
        📍 College 3D Map
      </h1>

      <div className="content-container">
        <div
          className="map-wrapper"
          style={{
            transform: `perspective(1000px) rotateX(${mapRotate.x}deg) rotateY(${mapRotate.y}deg)`,
          }}
          onMouseMove={handleMapMouseMove}
          onMouseLeave={() => setMapRotate({ x: 0, y: 0 })}
        >
          <img src={map} alt="College Map" className="map-image" />
        </div>

        <div className="navigation-section">
          <h2>🏛 Navigation</h2>
          <ul>
            {locations.map((loc) => (
              <li key={loc.id} className="nav-item">
                <strong>{loc.id}.</strong> {loc.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CollegeMap;
