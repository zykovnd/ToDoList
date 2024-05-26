import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let innerTime = time;
    const timerId = setInterval(() => {
      innerTime++;
      setTime(innerTime);
    }, 1000);
    return () => clearInterval(timerId);
  }, []);
  return <span>{time}</span>;
}

export function TimerStarter() {
  const [startTimer, setStartTimer] = useState(false);

  const startTimerHandler = () => {
    setStartTimer(true);
  };

  return (
    <div>
      <button onClick={startTimerHandler}>Старт</button>
      {startTimer && <Timer />}
    </div>
  );
}
