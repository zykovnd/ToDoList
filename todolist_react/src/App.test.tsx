import React from "react";
import {
  fireEvent,
  getByPlaceholderText,
  render,
  screen,
} from "@testing-library/react";
import App from "./App";

test("renders app header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Список задач/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders buttons", () => {
  render(<App />);
  let buttons: HTMLElement[] = [];
  buttons.push(screen.getByText("Добавить"));
  buttons.push(screen.getByText("Очистить все"));
  expect(buttons).toHaveLength(2);
});

test("renders input field", async () => {
  render(<App />);
  const inputElement = await screen.findByPlaceholderText(
    "Введите новую задачу"
  );
  expect(inputElement).toBeInTheDocument();
});

test("creates new todo element", async () => {
  render(<App />);
  const inputText = "Expected text";

  fireEvent.input(screen.getByPlaceholderText("Введите новую задачу"), {
    target: { value: inputText },
  });
  fireEvent.click(screen.getByText("Добавить"));

  fireEvent.input(screen.getByPlaceholderText("Введите новую задачу"), {
    target: { value: "" },
  });

  expect(screen.getByText(inputText)).toBeInTheDocument();
});

test("updates counters", async () => {
  render(<App />);
  fireEvent.input(screen.getByPlaceholderText("Введите новую задачу"), {
    target: { value: "text1" },
  });
  fireEvent.click(screen.getByText("Добавить"));
  fireEvent.click(screen.getByText("Выполнить"));

  fireEvent.input(screen.getByPlaceholderText("Введите новую задачу"), {
    target: { value: "text2" },
  });
  fireEvent.click(screen.getByText("Добавить"));

  expect(screen.getByText("Сделано: 1")).toBeInTheDocument();
  expect(screen.getByText("Не сделано: 1")).toBeInTheDocument();
});
