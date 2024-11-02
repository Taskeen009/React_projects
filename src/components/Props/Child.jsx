import React, { useEffect, useState } from 'react';

function ChildComponent({ message,handleMsg }) {
  const [childMessage, setChildMessage] = useState(message);

  useEffect(() => {
    // Update child state whenever the prop changes
    setChildMessage(message);
  }, [message]);

 
  return (
    <div >
      <h2>Child Component</h2>
      <p>Message: {childMessage}</p>
      <button onClick={handleMsg}>Click Me!!!</button>
    </div>
  );
}

export default ChildComponent;
