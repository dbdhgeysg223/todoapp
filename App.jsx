import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setList([...list, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  return (
    <div className="con1">
      <h3>Todo App</h3>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Your Task"
      />
      <button onClick={addTask} className="sumbit">sumbit</button>

      <div className="display">
        {list.map((item, i) => (
          <div key={i} className="xyz">
            <p>{item}</p>
            <button onClick={() => removeTask(i)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;