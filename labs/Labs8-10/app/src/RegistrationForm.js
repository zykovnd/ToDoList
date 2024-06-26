import React, { useState } from "react";
import axios from "axios";

export function RegistrationForm() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");

  function usernameChangeHandler(event) {
    setNickname(event.target.value);
  }
  function passwordChangeHandler(event) {
    setPassword(event.target.value);
  }
  function passwordConfirmationChangeHandler(event) {
    setPasswordConfirmation(event.target.value);
  }

  function isValid() {
    setError("");
    if (!nickname.trim()) {
      setError("Логин обязателен");
      return false;
    }
    if (nickname.trim().length < 6) {
      setError("Логин слишком короткий");
      return false;
    }
    if (nickname.trim().length > 20) {
      setError("Логин слишком длинный");
      return false;
    }
    if (!/^[a-zA-Z0-9]+$/.test(nickname.trim())) {
      setError("Логин содержит только буквы латинского алфавита и цифры");
      return false;
    }
    if (!password.trim()) {
      setError("Пароль обязателен");
      return false;
    }
    if (!passwordConfirmation.trim()) {
      setError("Повтор пароля обязателен");
      return false;
    }
    if (passwordConfirmation.trim() !== password.trim()) {
      setError("Пароли не совпадают");
      return false;
    }
    return true;
  }

  async function submitHandler(e) {
    e.preventDefault();
    if (isValid()) {
      try {
        const response = await axios.post("http://localhost:3001/user", {
          nickname,
          password,
        });
        console.log(response.data);
        if (response) {
          window.location.replace("/login");
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div>
      <input
        type="text"
        id="username"
        value={nickname}
        onChange={usernameChangeHandler}
        placeholder="Введите логин"
      />
      <input
        type="password"
        id="password"
        value={password}
        onChange={passwordChangeHandler}
        placeholder="Введите пароль"
      />
      <input
        type="password"
        id="password-confirmation"
        value={passwordConfirmation}
        onChange={passwordConfirmationChangeHandler}
        placeholder="Повторите пароль"
      />
      <button type="submit" onClick={submitHandler}>
        Зарегистрироваться
      </button>
      {error !== "" && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}
