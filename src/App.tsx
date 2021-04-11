import React, { useState } from "react";
import "./App.css";
import TaskAdder from "./components/TaskAdder";

function App() {
  const [tasks, setTasks] = useState(["Greet your neighbor", "Eat breakfast"]);

  const deleteTask = (i: number) => {
    const newTasks = tasks.filter((_task, index) => index !== i);
    setTasks(newTasks);
  };

  const deleteAllTask = () => {
    setTasks([]);
  };

  const onTaskAdd = (taskValue: string) => {
    const alreadyExistSameTask = tasks.some((task) => task === taskValue);
    if (alreadyExistSameTask) return false;
    const newTasks = [...tasks, taskValue];
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDoApp</h1>
        <p>Please input your task!</p>
        <div className="input-container">
          <TaskAdder onTaskAdd={onTaskAdd} />
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
