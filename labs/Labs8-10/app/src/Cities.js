import React, { useState } from "react";

export function Cities() {
  const [selectedCity, setSelectedCity] = useState("");

  const cities = [
    "Нью-Йорк",
    "Лондон",
    "Москва",
    "Пекин",
    "Рио-де-Жанейро",
    "Варшава",
    "Париж",
  ];

  const cityChangeHandler = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <select value={selectedCity} onChange={cityChangeHandler}>
        <option value="">Выберите город</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
      {selectedCity !== "Рио-де-Жанейро" && <p>Нет, это не Рио-де-Жанейро!</p>}
    </div>
  );
}
