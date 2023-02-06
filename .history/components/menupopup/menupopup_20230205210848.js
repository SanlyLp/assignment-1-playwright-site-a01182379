import React, { useState } from 'react';
import menuIcon from "@/public/background-images/menuBackground.png"

const MenuPopup = () => {
  const [popup, setPopup] = useState(false);

  const handleClick = () => {
    setPopup(!popup);
  };

  return (
    <div>
      <button onClick={handleClick}>
        <img src= alt="mune background image" />
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



