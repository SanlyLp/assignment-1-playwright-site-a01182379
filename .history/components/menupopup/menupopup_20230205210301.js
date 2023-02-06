import React, { useState } from 'react';
import menuIcon from 

const MenuPopup = () => {
  const [popup, setPopup] = useState(false);

  const handleClick = () => {
    setPopup(!popup);
  };

  return (
    <div>
      <button onClick={handleClick}>
        <img src="/Users/sanlylp/Desktop/assignment-1-playwright-site-a01182379/public/background-images/menuBackground.png" alt="Menu button" />
      </button>
      {popup ? (
        <div className="menu-popup">
          <h1>x</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MenuPopup;



