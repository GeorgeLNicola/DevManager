import React, { useState, useEffect, useRef } from "react";
import Todo from "./Todo";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [inititalized, setInititalized] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inititalized) localStorage.setItem("input", JSON.stringify(input));
  }, [input]);

  useEffect(() => {
    inputRef.current.focus();
    const storedInput = JSON.parse(localStorage.getItem("input"));
    if (storedInput) setInput(storedInput);
    setInititalized(true);
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="I need to..."
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Add
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
