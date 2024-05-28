import { useState, useEffect } from "react";
import Task from "./Task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<
    {
      id: string;
      text: string;
      completed: boolean;
      date: string;
    }[]
  >([]);
  const [taskText, setTaskText] = useState("");

  const [completedTasks, setCompletedTasks] = useState(0);
  const [uncompletedTasks, setUncompletedTasks] = useState(0);

  const addTaskHandler = () => {
    if (!taskText) {
      return;
    }
    const newTask = {
      id: (tasks.length + 1).toString(),
      text: taskText,
      completed: false,
      date: new Date().toLocaleString(),
    };
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const deleteAllTasksHandler = () => {
    setTasks([]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id: string) => {
    setTasks(
      tasks.filter((task) => (task.id === id ? (task.completed = true) : task))
    );
  };

  useEffect(() => {
    setCompletedTasks(tasks.filter((task) => task.completed === true).length);
    setUncompletedTasks(tasks.filter((task) => task.completed !== true).length);
  }, [tasks]);
  return (
    <div>
      <div id="app">
        <h1>Список задач</h1>
        <div id="counters-container">
          <div id="completed-tasks-counter" className="task-counter">
            Сделано: {completedTasks}
          </div>
          <div id="uncompleted-tasks-counter" className="task-counter">
            Не сделано: {uncompletedTasks}
          </div>
        </div>
        <div id="task-container">
          {tasks.map((task) => (
            <Task
              id={task.id}
              text={task.text}
              completed={task.completed}
              date={task.date}
              onComplete={() => completeTask(task.id)}
              onDelete={() => deleteTask(task.id)}
            />
          ))}
        </div>
        <div id="input-container">
          <input
            type="text"
            id="new-task"
            placeholder="Введите новую задачу"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <button id="add-button" onClick={addTaskHandler}>
            Добавить
          </button>
          <button id="delete-all-button" onClick={deleteAllTasksHandler}>
            Очистить все
          </button>
        </div>
      </div>
      <footer>
        <hr className="line" />
        <p>Copyright ©</p>
      </footer>
    </div>
  );
}

export default App;
