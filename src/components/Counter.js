import React, { useState } from "react";

function Counter() {
  const [currentCount, setCount] = useState(0);

  
  function increment() {
    setCount((currentCount) => currentCount + 1);
    console.log(currentCount)
  }

  const counterStyle = {
    color: "purple",
    fontSize: "240px", 
    cursor: "pointer",
    display: "flex",
    alignItems: 'center',
        justifyContent: 'center',
    
  };

  return <div style={counterStyle} onClick={increment}>{currentCount}</div>;  
}
export default Counter;







