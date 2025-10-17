"use client";
import { useState } from "react";

export default function TodoListApp() {
  const [tasks, setTasks] = useState([
    { text: "Sleep", done: false },
    { text: "Join React class", done: true },
    { text: "Do react homework", done: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, done: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Todo List App</h1>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter a new task.."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ padding: "8px", width: "200px", marginRight: "5px" }}
        />
        <button
          onClick={handleAdd}
          style={{
            padding: "8px 16px",
            cursor: "pointer",
            border: "1px solid #444",
          }}
        >
          Add
        </button>
      </div>

      <ul
        style={{
          listStyleType: "disc",
          textAlign: "left",
          display: "inline-block",
          marginTop: "20px",
        }}
      >
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(index)}
              style={{ marginRight: "8px" }}
            />
            <span
              style={{
                textDecoration: task.done ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
