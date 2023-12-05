// Parent component (e.g., App.js)
import React, { useState } from 'react';
import { AddItem } from './components/AddItem';

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <h1>Your App</h1>
      <button onClick={openPopup}>New Entry</button>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="close-btn" onClick={closePopup}>
              &times;
            </span>
            <AddItem closePopup={closePopup} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;


