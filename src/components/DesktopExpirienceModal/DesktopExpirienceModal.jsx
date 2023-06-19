import React, { useEffect, useState } from 'react';
import "../DesktopExpirienceModal/DesktopExpirienceModal.css"
const DesktopExperienceModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on initial load

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="desktop-experience-modal">
      <div className="desktop-experience-modal-content">
        <h2>Optimize Your Experience</h2>
        <p>
          For the best experience, we recommend using a laptop or desktop
          computer.
        </p>
        <button onClick={closeModal}>Continue</button>
      </div>
    </div>
  );
};

export default DesktopExperienceModal;
