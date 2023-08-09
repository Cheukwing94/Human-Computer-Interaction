import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const [pageColor, setPageColor] = useState('#249AB2');

  const handleNotificationToggle = () => {
    setIsNotificationEnabled(prevState => !prevState);
  };

  const handleColorChange = (color) => {
    setPageColor(color);
    document.documentElement.style.setProperty('--page-color', color);
  };

  return (
    <div className='setting'>
      <h1>Settings</h1>
      <div className="notification-container">
        <div className="notification-title">
          <h2>Notifications</h2>
        </div>
        <button
          className={`notification-button ${isNotificationEnabled ? 'on' : 'off'}`}
          onClick={handleNotificationToggle}
        >
          <span className="notification-status">{isNotificationEnabled ? 'ON' : 'OFF'}</span>
          <span className="notification-slider"></span>
        </button>
      </div>
      <div>
        <h2>Page Color</h2>
        <label htmlFor="color-picker">Choose a color:</label>
        <input
          type="color"
          id="color-picker"
          className='color-picker-input'
          value={pageColor}
          onChange={e => handleColorChange(e.target.value)}
        />
      </div>
      <Link to='/'>
        <button className="logout-button">
          <span className="logout-button-text">Sign out</span>
          <span className="logout-button-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 5l-5 5h3v4h4v-4h3l-5-5zm-2 5.5c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5 0-.14-.06-.26-.16-.35l-1.5-1.5c-.09-.09-.21-.15-.35-.15s-.26.06-.35.15l-1.5 1.5c-.1.09-.16.21-.16.35zm2.5 3.5h-3v-1h3v1z" />
            </svg>
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Settings;
