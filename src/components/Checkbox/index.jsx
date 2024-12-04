import { useState } from "react";

import { PencilSimple, TrashSimple } from "@phosphor-icons/react";

import "./checkbox.css";

export function Checkbox({ id, completed, title }) {
  const [checked, setChecked] = useState(completed);

  function handleOnChange(event) {
    setChecked(event.target.checked);
  }

  function handleOnEdit() {
    console.log("Edit", id);
  }

  function handleOnDelete() {
    console.log("Delete", id);
  }

  return (
    <div>
      <input
        id={title}
        type="checkbox"
        checked={checked}
        onChange={handleOnChange}
      />
      <label htmlFor={title}>{title}</label>

      <button onClick={handleOnEdit}>
        <PencilSimple />
      </button>

      <button onClick={handleOnDelete}>
        <TrashSimple />
      </button>
    </div>
  );
}
