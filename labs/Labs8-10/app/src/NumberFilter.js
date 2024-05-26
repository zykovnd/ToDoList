import React, { useState } from "react";

export function NumberFilter() {
  const [numbers, setNumbers] = useState([1, 13, 6, 52, 4, 14]);
  const [inputNumber, setInputNumber] = useState("");
  const [filter, setFilter] = useState("all");

  const addNumberHandler = () => {
    if (inputNumber !== "") {
      setNumbers([...numbers, parseFloat(inputNumber)]);
      setInputNumber("");
    }
  };

  const inputChangeHandler = (e) => {
    setInputNumber(e.target.value);
  };

  const filterChangeHandler = (newFilter) => {
    setFilter(newFilter);
  };

  const getFilteredNumbers = () => {
    if (filter === "Чётные") {
      return numbers.filter((number) => number % 2 === 0);
    } else if (filter === "Нечётные") {
      return numbers.filter((number) => number % 2 !== 0);
    } else {
      return numbers;
    }
  };

  return (
    <div>
      <h1>Список чисел с фильтрацией</h1>
      <input
        type="number"
        value={inputNumber}
        onChange={inputChangeHandler}
        placeholder="Введите число"
      />
      <button onClick={addNumberHandler}>+</button>
      <div>
        <button onClick={() => filterChangeHandler("Все")}>Все</button>
        <button onClick={() => filterChangeHandler("Чётные")}>Чётные</button>
        <button onClick={() => filterChangeHandler("Нечётные")}>
          Нечётные
        </button>
      </div>
      <ul>
        {getFilteredNumbers().map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}
