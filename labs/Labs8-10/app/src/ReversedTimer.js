import React, { useState, useEffect } from "react";

function ReversedTimer() {
  const [time, setTime] = useState(10);

  useEffect(() => {
    let innerTime = time;

    const timerId = setInterval(() => {
      innerTime--;
      if (innerTime <= 0) {
        clearInterval(timerId);
      }
      setTime(innerTime);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);
  return <span>{time}</span>;
}

export function ReversedTimerStarter() {
  const [startTimer, setStartTimer] = useState(false);

  const startTimerHandler = () => {
    setStartTimer(true);
  };

  return (
    <div>
      <button onClick={startTimerHandler}>Старт</button>
      {startTimer && <ReversedTimer />}
    </div>
  );
}
