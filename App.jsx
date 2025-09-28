import React, {useState} from "react";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function add() {
    if (text !== "") {
      setItems([...items, text]);
      setText("");
    }
  }

  function remove(i) {
    let copy = [...items];
    copy.splice(i, 1);
    setItems(copy);
  }

  return (
    <div className="cont">
      <h1 className="title">Todo</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} className="input" />
      <button onClick={add} className="add">Add</button>

      {items.map((item, i) => (
        <div key={i} className="con">
          {item}
          <button onClick={() => remove(i)} className="btn">X</button>
        </div>
      ))}
    </div>
  );
}

export default App;
