import { Checkbox } from "../Checkbox";

export function List({ items }) {
  return (
    <div>
      {items.map((item) => (
        <Checkbox
          key={item.id}
          id={item.id}
          title={item.title}
          completed={item.completed}
        />
      ))}
    </div>
  );
}
