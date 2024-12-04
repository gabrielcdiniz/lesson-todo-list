import { CheckboxWithContext } from "../Checkbox";
import { useTodo } from "../../contexts/TodoContext";

import "./List.css";

export function ListWithContext() {
  const { todos } = useTodo();

  return (
    <ul className="List">
      {todos.map((todo) => (
        <li key={todo.id}>
          <CheckboxWithContext
            id={todo.id}
            defaultTitle={todo.title}
            completed={todo.completed}
          />
        </li>
      ))}
    </ul>
  );
}
