import React, { useState } from "react";

export function Calculator() {
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  function operationHandler() {
    console.log(operator);
    switch (operator) {
      case "+":
        setResult((parseFloat(operand1) + parseFloat(operand2)).toString());
        break;
      case "-":
        setResult((parseFloat(operand1) - parseFloat(operand2)).toString());
        break;
      case "*":
        setResult((parseFloat(operand1) * parseFloat(operand2)).toString());
        break;
      case "/":
        setResult((parseFloat(operand1) / parseFloat(operand2)).toString());
        break;
      default:
        setResult("Unknown operation");
        break;
    }
  }

  return (
    <div>
      <h1>Калькулятор</h1>
      <div>
        <input
          type="number"
          value={operand1}
          onChange={(e) => setOperand1(e.target.value)}
          placeholder="Первое число"
        />
        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          value={operand2}
          onChange={(e) => setOperand2(e.target.value)}
          placeholder="Второе число"
        />
        <button onClick={operationHandler}>Считать</button>
        {result !== null && <big> = {result}</big>}
      </div>
    </div>
  );
}
