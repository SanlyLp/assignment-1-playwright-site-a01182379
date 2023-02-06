import React from "react";
import menuicon from "@/public/icons/menu-icon.png"

export default function nav() {
  return (
    <div>

            <img src={menuicon} alt= "menu button" onClick={}></img>

       
    </div>
  )
}
const handleClick = () => {
    setPopup(!popup);
  };

  return (
    <div>
      <button onClick={handleClick}>
        <img src={menuIcon} alt="menu background image" />
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

