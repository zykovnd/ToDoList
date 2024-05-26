import React, { useState } from "react";

export function ProfileEditForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    lastName: "",
    birthDate: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  function formChangeHandler(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function isValid() {
    setErrors({});
    if (!formData.firstName.trim()) {
      setErrors({ firstNameError: "Имя обязательно" });
      return false;
    }
    if (!formData.secondName.trim()) {
      setErrors({ secondNameError: "Отчество обязательно" });
      return false;
    }
    if (!formData.lastName.trim()) {
      setErrors({ lastNameError: "Фамилия обязательна" });
      return false;
    }
    return true;
  }

  function submitHandler(e) {
    e.preventDefault();
    if (isValid()) {
      console.log("Успешно");
    }
  }

  return (
    <div>
      <input
        type="text"
        id="first-name"
        name="firstName"
        value={formData.firstName}
        onChange={formChangeHandler}
        placeholder="Введите имя"
      />
      {errors.firstNameError && (
        <span style={{ color: "red" }}>{errors.firstNameError}</span>
      )}
      <input
        type="text"
        id="second-name"
        name="secondName"
        value={formData.secondName}
        onChange={formChangeHandler}
        placeholder="Введите отчество"
      />
      {errors.secondNameError && (
        <span style={{ color: "red" }}>{errors.secondNameError}</span>
      )}
      <input
        type="text"
        id="last-name"
        name="lastName"
        value={formData.lastName}
        onChange={formChangeHandler}
        placeholder="Введите фамилию"
      />
      {errors.lastNameError && (
        <span style={{ color: "red" }}>{errors.lastNameError}</span>
      )}
      <input
        type="date"
        id="date"
        name="birthDate"
        value={formData.birthDate}
        onChange={formChangeHandler}
        placeholder="дд.мм.гггг"
      />
      <input
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={formChangeHandler}
        placeholder="Введите адрес"
      />
      <button type="submit" onClick={submitHandler}>
        Сохранить
      </button>
    </div>
  );
}
