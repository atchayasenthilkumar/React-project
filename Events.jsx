import React, { useState } from "react";

function Events() {
  let [a, setA] = useState(0);  
  let [c, setC] = useState(0);  

  const handleIncrementA = () => {
    setA(a + 1);
    console.log("a:", a + 1);
  };

  const handleDecrementC = () => {
    setC(c - 1);
    console.log("c:", c - 1);
  };

  const handleReset = () => {
    setA(0);
    setC(0);
    console.log("Reset both a and c to 0");
  };

  return (
    <div>
      <h1>Event Handlers</h1>
      <button onClick={handleIncrementA}>Increment </button>
      <button onClick={handleDecrementC}>Decrement </button>
      <button onClick={handleReset}>Reset</button>
      <p>The value of increment is: {a}</p>
      <p>The value of decrement is: {c}</p>
    </div>
  );
}

export default Events;
