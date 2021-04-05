import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState(["Greet your neighbor", "Eat breakfast"]);

  const onTaskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const addTask = () => {
    const alreadyExistSameTask = tasks.some((task) => task === inputText);
    if (alreadyExistSameTask) return false;
    const newTasks = [...tasks, inputText];
    setTasks(newTasks);
    setInputText("");
  };
  const addTaskIfEnterPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTask();
    }
  };
  const deleteTask = (i: number) => {
    const newTasks = tasks.filter((_task, index) => index !== i);
    setTasks(newTasks);
  };
  const deleteAllTask = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDoApp</h1>
        <p>Please input your task!</p>
        <div className="input-container">
          <input
            type="text"
            value={inputText}
            onChange={onTaskInput}
            onKeyPress={addTaskIfEnterPressed}
          />
          <button onClick={addTask}>add</button>
        </div>
        <ul className="todo-list">
          {tasks.map((task, index) => (
            <li key={task}>
              <span>{task}</span>
              <span className="delete-btn" onClick={() => deleteTask(index)}>
                {" "}
                ❎
              </span>
            </li>
          ))}
          {tasks.length > 0 && (
            <button onClick={deleteAllTask}>DELETE ALL TASK</button>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
