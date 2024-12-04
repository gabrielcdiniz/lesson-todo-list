import { useTodo } from "../../contexts/TodoContext";

import "./ListReadonly.css";

export function ListReadonlyWithContext() {
  const { todos } = useTodo();

  return (
    <ul className="ListReadonly">
      {todos.map((todo) => (
        <li key={todo.id} className="ListReadonly__Item">
          [{todo.id}] {todo.title}:{" "}
          {todo.completed ? "Completed" : "Not completed"}
        </li>
      ))}
    </ul>
  );
}
