import { MouseEventHandler } from "react";

function Task({
  id,
  text,
  completed,
  date,
  onComplete,
  onDelete,
}: {
  id: string;
  text: string;
  completed: boolean;
  date: string;
  onComplete: MouseEventHandler<HTMLButtonElement>;
  onDelete: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className="task" id={id}>
      <div
        className="text"
        style={{
          textDecoration: completed ? "line-through" : "none",
          color: completed ? "888" : "inherit",
        }}
      >
        {text}
      </div>
      <div className="text">{date}</div>
      <button onClick={onComplete}>Выполнить</button>
      <button onClick={onDelete}>Удалить</button>
    </div>
  );
}
export default Task;
