import React, { useState, useEffect } from "react";

export function SecondsLiving() {
  const [birthDate, setBirthDate] = useState("");
  const [secondsLived, setSecondsLived] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      let birth = new Date(birthDate).getTime();
      let now = Date.now();
      let seconds = Math.round((now - birth) / 1000);
      setSecondsLived(seconds.toString());
    }, 1000);
    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <div>
      <h1>Время жизни</h1>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => {
          setBirthDate(e.target.value);
        }}
        placeholder="дд.мм.гггг"
      />
      {birthDate && <div>Вы прожили: {secondsLived} секунд.</div>}
    </div>
  );
}
