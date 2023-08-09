import React, { useState } from 'react';

function Notification(props) {
  const [showNotification, setShowNotification] = useState(true);

  // Hide the notification after 3 seconds
  setTimeout(() => {

    setShowNotification(false);
  }, 4000);

  return (
    <div className={`notification ${showNotification ? 'show' : ''}`}>
      <div className='notification_title'> Notification:</div>
      <div className='notification_message'> {props.message}</div>
    </div>
  );
}

export default Notification;
