import React, { useState } from 'react';

const TechTeamPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <div>
      <span
        onClick={openPopup}
        style={{
          cursor: 'pointer',
          fontSize: '12px',
          color: '#66d9ef',
          textDecoration: 'underline',
          margin: '20px',
        }}
      >
        Tech Team (View all members)
      </span>

      {isOpen && (
        <>
          {/* Popup Overlay */}
          <div
            onClick={closePopup}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.8)',
              zIndex: 999,
            }}
          />

          {/* Popup Modal */}
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: '#2d2d2d',
              border: '1px solid #444',
              padding: '20px',
              zIndex: 1000,
              boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
              width: '80%',
              maxWidth: '500px',
              fontFamily: 'monospace',
              borderRadius: '8px',
              color: '#f8f8f2',
            }}
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'transparent',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                lineHeight: '1',
                color: '#f8f8f2',
              }}
            >
              &times;
            </button>

            {/* Tech Team Section */}
            <h2
              style={{
                marginTop: '0',
                textAlign: 'center',
                borderBottom: '1px solid #444',
                paddingBottom: '10px',
              }}
            >
              Tech Team
            </h2>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <span style={{ margin: '0 10px' }}>
                <a
                  href="https://www.linkedin.com/in/prashant-uppar-soft89"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: '#66d9ef' }}
                >
                  Prashant
                </a>
              </span>
              <span style={{ margin: '0 10px' }}>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: '#66d9ef' }}
                >
                  Pratik
                </a>
              </span>
              <span style={{ margin: '0 10px' }}>
                <a
                  href="https://www.linkedin.com/in/prathmesh-k"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: '#66d9ef' }}
                >
                  Prathamesh
                </a>
              </span>
              <span style={{ margin: '0 10px' }}>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: '#66d9ef' }}
                >
                  Amaresh
                </a>
              </span>
              <span style={{ margin: '0 10px' }}>
                <a
                  href="https://www.linkedin.com/in/umarani-bharamanaikar-478107357"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: '#66d9ef' }}
                >
                  Uma
                </a>
              </span>
              <span style={{ margin: '0 10px' }}>
                <a
                  href="https://www.linkedin.com/in/sandesh-chavan-189a4928b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: '#66d9ef' }}
                >
                  Sandesh
                </a>
              </span>
            </div>

            <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #444' }} />

            {/* Consulted Section */}
            <h3
              style={{
                textAlign: 'center',
                borderBottom: '1px solid #444',
                paddingBottom: '10px',
              }}
            >
              Consulted
            </h3>
            <div style={{ textAlign: 'center' }}>
              <span style={{ margin: '0 10px' }}>
                <a
                  href="https://in.linkedin.com/in/atharva-rasane"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: '#66d9ef' }}
                >
                  Atharva Rasane
                </a>
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TechTeamPopup;
