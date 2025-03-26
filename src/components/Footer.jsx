import React from 'react';
import { Instagram, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import './Footer.css';
import Logo from '../assets/Logo.png';
import TechTeamPopup from './TechTeamPopup';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* College/Fest Info */}
          <div className="text-center">
            <div className="footer-logo">
              <img src={Logo} alt="Invento Logo" className="logo-image" />
              <h3 className="footer-title">Invento 2025</h3>
              <Sparkles />
            </div>
            <p className="footer-description">
              Experience the Rhythm of Tradition and Talent<br />
              KLE Technological University
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="section-title">Contact Us</h3>
            <div className="contact-info">
              <p className="footer-contact-item">
                <Phone size={16} />
                Mansi Patil
                <a href="tel:+918317491367" style={{ color: 'inherit', textDecoration: 'none', marginLeft: '8px' }}>
                  +91 8317491367
                </a>
              </p>
              <p className="contact-item">
                <Phone size={16} />
                Avinash Chavan
                <a href="tel:+919035125258" style={{ color: 'inherit', textDecoration: 'none', marginLeft: '8px' }}>
                  +91 9035125258
                </a>
              </p>
              <p className="contact-item">
                <MapPin size={16} />
                <a href="https://maps.app.goo.gl/pt3sZZnk3zPeQ25F6" target='_blank'
                  style={{
                    color: 'inherit',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#f59e0b'}
                  onMouseLeave={(e) => e.target.style.color = 'inherit'}>
                  KLE Technological University's Dr. MSSCET
                </a>
              </p>
              
              <img src="/logo_kle.png" alt="" />

              {/* Social Media */}
              <div className="social-links">
                <a href="https://www.instagram.com/invento_2k25?igsh=MXI1azFyOXpkbzNyYQ==" className="social-link" target='_blank'>
                  <Instagram size={20} />
                  Invento2K25
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          © {new Date().getFullYear()} Made with ♡ by -
          <TechTeamPopup></TechTeamPopup>
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
