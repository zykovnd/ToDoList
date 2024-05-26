import React, { useState } from "react";

export function BaseCalculator() {
  const [number, setNumber] = useState("");
  const [initialBase, setInitialBase] = useState("10");
  const [finalBase, setFinalBase] = useState("2");
  const [result, setResult] = useState("");

  function convertHandler() {
    let decimal = parseInt(number, initialBase);
    let result = decimal.toString(finalBase);
    setResult(result);
  }

  return (
    <div>
      <h2>Калькулятор</h2>
      <div>
        <label>
          Число:
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Input Base:
          <select
            value={initialBase}
            onChange={(e) => setInitialBase(e.target.value)}
          >
            <option value="2">Двоичная (2)</option>
            <option value="10">Десятичная (10)</option>
            <option value="8">Восьмеричная (8)</option>
            <option value="16">Шестнадцатеричная (16)</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Output Base:
          <select
            value={finalBase}
            onChange={(e) => setFinalBase(e.target.value)}
          >
            <option value="2">Двоичная (2)</option>
            <option value="10">Десятичная (10)</option>
            <option value="8">Восьмеричная (8)</option>
            <option value="16">Шестнадцатеричная (16)</option>
          </select>
        </label>
      </div>
      <button onClick={convertHandler}>Вычислить</button>
      <div>
        <h3>Результат:</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}
