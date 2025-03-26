import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { motion } from "framer-motion";
import "./ContactUs.css";

const contacts = [
  { name: "Mansi Patil", phone: "+91 83174 91367" },
  { name: "Sakshi Juvekar", phone: "+91 82960 92238" },
  { name: "Harshvardhan Kumbhar", phone: "+91 91726 34865" },
  { name: "Avinash Chavan", phone: "+91 90351 25258" },
  { name: "Sakshi Patil", phone: "6366481409" },
  { name: "Anusha Kudachi", phone: "9449252694" },
];

const ContactCard = ({ contact }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contact.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="contact-card"
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 192, 203, 0.8)" }}
      transition={{ duration: 0.3 }}
    >
      <h3>{contact.name}</h3>
      <div className="phone-number" onClick={copyToClipboard}>
        {contact.phone} 
        <motion.span
          className="copy-icon"
          animate={{ rotate: [0, 15, -15, 10, -10, 0], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <FaCopy />
        </motion.span>
      </div>
      {copied && <span className="copied-text">Copied!</span>}
    </motion.div>
  );
};

export default function ContactPage() {
  const title = "Meet Our Team";

  return (
    <div className="contact-container">
      {/* Contacts Section */}
      <div className="contact-list">
        <h1 className="contact-title">
          {title.split(" ").map((word, i) => (
            <span key={`word-${i}`} className="rotated-word">
              {word.split("").map((char, j) => (
                <motion.span
                  key={`char-${i}-${j}`}
                  style={{ display: "inline-block" }}
                  animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>
        <div className="contact-cards">
          {contacts.map((contact, index) => (
            <ContactCard key={index} contact={contact} />
          ))}
        </div>
      </div>
      {/* Google Maps Section */}
      <div className="map-container">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5261.145894754337!2d74.49684522401746!3d15.789767654428507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf65ce55555555%3A0x9b70f622a9a0fb44!2sKLE%20Technological%20University&#39;s%2C%20Dr.%20M.%20S.%20Sheshgiri%20Campus!5e0!3m2!1sen!2sin!4v1742568116163!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
