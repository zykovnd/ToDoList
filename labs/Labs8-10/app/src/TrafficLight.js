import React, { useState, useEffect } from "react";

export function TrafficLight() {
  const [redLight, setRedLight] = useState(false);
  const [yellowLight, setYellowLight] = useState(false);
  const [greenLight, setGreenLight] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRedLight(true);
      setYellowLight(false);
      setGreenLight(false);
      setTimeout(() => {
        setRedLight(false);
        setYellowLight(true);
      }, 1000);
      setTimeout(() => {
        setYellowLight(false);
        setGreenLight(true);
      }, 2000);
      setTimeout(() => {
        setGreenLight(false);
      }, 3000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundColor: redLight ? "red" : "DarkRed",
          width: 50,
          height: 50,
          borderRadius: "50%",
          margin: "10px",
        }}
      ></div>
      <div
        style={{
          backgroundColor: yellowLight ? "yellow" : "#FFFFE0",
          width: 50,
          height: 50,
          borderRadius: "50%",
          margin: "10px",
        }}
      ></div>
      <div
        style={{
          backgroundColor: greenLight ? "#00FF00" : "#006400",
          width: 50,
          height: 50,
          borderRadius: "50%",
          margin: "10px",
        }}
      ></div>
    </div>
  );
}
