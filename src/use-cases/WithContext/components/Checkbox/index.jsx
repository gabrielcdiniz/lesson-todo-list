import { useState } from "react";

import { PencilSimple, TrashSimple } from "@phosphor-icons/react";
import { useTodo } from "../../contexts/TodoContext";

import "./Checkbox.css";

export function CheckboxWithContext({ id, completed, defaultTitle }) {
  const { editTodo, removeTodo, toggleTodo } = useTodo();

  const [checked, setChecked] = useState(completed);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(defaultTitle);

  function handleOnChange(event) {
    setChecked(event.target.checked);

    toggleTodo(id);
  }

  function handleOnChangeEdit(event) {
    setTitle(event.target.value);
  }

  function handleOnEdit() {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  }

  function handleOnSubmit(event) {
    event.preventDefault();

    editTodo(id, title);

    setIsEditing(false);
  }

  function handleOnDelete() {
    console.log("Delete", id);

    removeTodo(id);
  }

  return (
    <div className="Checkbox">
      <div className="Checkbox__Row">
        <div className="Checkbox__InputLabel">
          <input
            className="Checkbox__Input"
            id={id}
            type="checkbox"
            checked={checked}
            onChange={handleOnChange}
          />
          <label className="Checkbox__EditLabel" htmlFor={defaultTitle}>
            {defaultTitle}
          </label>
        </div>

        <div className="Checkbox__Actions">
          <button onClick={handleOnEdit}>
            <PencilSimple />
          </button>

          <button onClick={handleOnDelete}>
            <TrashSimple />
          </button>
        </div>
      </div>

      <div className="Checkbox__Row">
        {isEditing && (
          <form className="Form" onSubmit={handleOnSubmit}>
            <label className="Form__Label" htmlFor="title_editing">
              Title
            </label>

            <div className="FormContainer__Input">
              <input
                className="Form__Input"
                id="title_editing"
                name="title_editing"
                type="text"
                value={title}
                onChange={handleOnChangeEdit}
              />

              <button className="Form__Submit" type="submit">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
