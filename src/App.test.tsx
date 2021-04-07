import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  afterEach(() => {
    cleanup();
  });
  test("render", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot;
  });
  test("default tasks", () => {
    render(<App />);
    screen.getByText("Greet your neighbor");
    screen.getByText("Eat breakfast");
  });
  test("addTask", () => {
    render(<App />);
    const input = screen.getByLabelText("task-input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "New Task" } });
    const button = screen.getByText("add");
    fireEvent.click(button);
    expect(input.value).toBe("");
    screen.getByText("New Task");
  });
  test("deleteTask", () => {
    render(<App />);
    screen.getByText("Greet your neighbor");
    const deleteBtn = screen.queryAllByText("❎")[0];
    fireEvent.click(deleteBtn);
    expect(screen.queryByText("Greet your neighbor")).toBeNull();
  });
  test("deleteAllTask", () => {
    render(<App />);
    const deleteAllBtn = screen.getByText("DELETE ALL TASK");
    fireEvent.click(deleteAllBtn);
    expect(screen.queryByText("Greet your neighbor")).toBeNull();
    expect(screen.queryByText("Eat breakfast")).toBeNull();
  });
});
