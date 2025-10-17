import React, { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    const trimmed = task.trim();
    if (!trimmed) return;
    setList([...list, trimmed]);
    setTask("");
  };

  const deleteTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
        background: "linear-gradient(135deg, #74ABE2, #5563DE)",
        minHeight: "100vh",
        color: "#fff",
        paddingTop: "60px",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>✨ To-Do List ✨</h1>

      <div style={{ marginBottom: "25px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task..."
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "8px",
            border: "none",
            marginRight: "10px",
            outline: "none",
          }}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button
          onClick={addTask}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "none",
            background: "#fff",
            color: "#5563DE",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      <ul
        style={{
          listStyle: "none",
          maxWidth: "350px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.15)",
          borderRadius: "10px",
          padding: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        {list.length === 0 && (
          <li style={{ color: "#eee", fontStyle: "italic" }}>
            No tasks yet — add one above.
          </li>
        )}

        {list.map((item, index) => (
          <li
            key={index}
            style={{
              background: "rgba(255,255,255,0.1)",
              margin: "8px 0",
              padding: "10px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backdropFilter: "blur(5px)",
            }}
          >
            <span>{item}</span>
            <button
              onClick={() => deleteTask(index)}
              style={{
                background: "transparent",
                border: "none",
                color: "#ff8080",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
