import { useState } from "react";

import { useTodo } from "../../contexts/TodoContext";

import "./Form.css";

export function FormWithContext() {
  const [title, setTitle] = useState("");

  const { addTodo } = useTodo();

  function handleOnChange(event) {
    setTitle(event.target.value);
  }

  function handleOnSubmit(event) {
    event.preventDefault();

    if (!title) return;

    addTodo(title);

    setTitle("");
  }

  return (
    <form className="Form" onSubmit={handleOnSubmit}>
      <label className="Form__Label" htmlFor="title">
        Title
      </label>

      <div className="FormContainer__Input">
        <input
          className="Form__Input"
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={handleOnChange}
        />

        <button className="Form__Submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
