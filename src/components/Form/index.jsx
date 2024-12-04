import { useState } from "react";

export function Form() {
  const [title, setTitle] = useState("");

  function handleOnChange(event) {
    setTitle(event.target.value);
  }

  function handleOnSubmit(event) {
    event.preventDefault();

    if (!title) return;

    console.log(title);

    setTitle("");
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="name">Name</label>

      <input
        id="name"
        name="title"
        type="text"
        value={title}
        onChange={handleOnChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
