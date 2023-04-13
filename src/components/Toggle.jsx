import React, { useState } from 'react';


const Toggle = ({ isLightMode, onClick }) => {
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = () => {
    setIsMoved(prevMode => !prevMode);
    onClick();
  };

  return (
    <div className={`toggle ${isLightMode ? 'toggle-light' : ''}`} onClick={handleClick}>
      <span
        style={{
          transition: 'all 0.3s ease',
          marginLeft: isMoved ? 'auto' : 0,
          marginRight: isMoved ? 0 : 'auto',
        }}
      ></span>
    </div>
  );
};

export default Toggle;
