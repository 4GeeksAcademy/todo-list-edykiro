import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setTasks((previous) => [...previous, inputValue.trim()]);
      setInputValue("");
    }
  };

  const editArray = (index) => {
    const newTasks = tasks.filter((task) => task !== tasks[index]);
    setTasks(newTasks);
  };

  return (
    <>
      <div className="container d-flex justify-content-center mt-4">
        <div className="col-12 col-sm-8 col-md-6 col-lg-5 todo-container">
          <div className="mb-4">
            <input
              type="text"
              className="form-control todo-input"
              placeholder="Type a task and press Enter"
              onChange={({ target }) => setInputValue(target.value)}
              value={inputValue}
              onKeyDown={handleKeyDown}
            />
          </div>
          <ul className="list-group todo-list">
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <li className="list-group-item todo-item">
                  {task}{" "}
                  <button
                    onClick={() => editArray(index)}
                    className="btn-delete-task"
                    title="Eliminar tarea"
                  >
                    X
                  </button>
                </li>
              ))
            ) : (
              <li className="list-group-item empty-state">
                <p className="empty-state-text">
                  Add a task above to get started!
                </p>
              </li>
            )}
          </ul>
          {tasks.length > 0 && (
            <div className="tasks-counter">
              <small>
                <strong>{tasks.length}</strong>{" "}
                {tasks.length === 1 ? "task" : "tasks"} remaining
              </small>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
