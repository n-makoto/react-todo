import React, { useState } from "react";

type PropsType = {
  onTaskAdd: (taskValue: string) => void;
};

function TaskAdder({ onTaskAdd }: PropsType) {
  const [inputText, setInputText] = useState("");

  const onTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const addTaskIfEnterPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onAddBtnClicked();
    }
  };
  const onAddBtnClicked = () => {
    setInputText("");
    onTaskAdd(inputText);
  };

  return (
    <>
      <input
        aria-label="task-input"
        type="text"
        value={inputText}
        onChange={onTextInput}
        onKeyPress={addTaskIfEnterPressed}
      />
      <button onClick={onAddBtnClicked}>add</button>
    </>
  );
}

export default TaskAdder;
