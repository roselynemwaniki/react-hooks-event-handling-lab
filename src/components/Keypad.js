import React from 'react';

function Keypad() {
  // Event handler for input change
  function handleChange() {
    console.log('Entering password...');
  }

  return (
    <input 
      type="password" 
      onChange={handleChange} 
    />
  );
}

export default Keypad;
