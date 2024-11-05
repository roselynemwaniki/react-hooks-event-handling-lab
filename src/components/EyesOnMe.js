import React from 'react';

function EyesOnMe() {
  // Event handler for focus event
  function handleFocus() {
    console.log('Good!');
  }

  // Event handler for blur event
  function handleBlur() {
    console.log('Hey! Eyes on me!');
  }

  return (
    <button 
      onFocus={handleFocus} 
      onBlur={handleBlur}
    >
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
