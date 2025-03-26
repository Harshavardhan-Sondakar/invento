import { useEffect } from "react";
import { gsap } from "gsap";
import Jokers from "../assets/Joker.png";
import Logo from "../assets/Logo.png";
import "../components/Banner.css";

const Banner = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    // Curtain opening animation
    tl.to(".content", { opacity: 1, duration: 1, ease: "power2.inOut" }, "-=1");

    return () => tl.kill();
  }, []);

  return (

    <div className="banner-wrapper">

      <div className="content">
        <div className="logoInv">
          <video autoPlay loop muted className="vidBack">
            <source src="src\assets\CarnivalBack2.mp4" type="video/mp4" />
          </video>
          <img src={Logo} className="logoImg" alt="Invento_Logo" />
        </div>
        <div className="themeAndObj">
          <div className="jokersPng">
            <img src={Jokers} alt="Carnival Joker" className="Jokers" />
          </div>
          <div className="themeDesc">
            <h2 className="theme">
              Welcome to INVENTO 2025
              — “Smiles in the spotlight, secrets in the shadows”

              Step into a world where imagination knows no limits! INVENTO 2025 isn’t just a fest—it’s a mesmerizing celebration of creativity, technology, and culture, crafted into an unforgettable experience. This year, we bring you "Carnival", a theme that radiates energy, excitement, and the spirit of festivity.

              From electrifying performances and thrilling competitions to groundbreaking innovations and immersive experiences, INVENTO 2025 is a fusion of passion, brilliance, and boundless possibilities. Get ready to showcase your talents, embrace the extraordinary, and be part of a celebration like never before!
            </h2>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Banner;
