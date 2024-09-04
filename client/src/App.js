import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [color, setColor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/colorOptions")
      .then(res => res.json())
      .then(color => setColor(color));
  });

  return (
    <div className="App">
      <h1>Colerful Connections in Progress</h1>

      {color.map(col => (
        <ul key={col.id}>
          <li>{col.colorName}</li>
          <li>{col.colorValue}</li>
          <li>{col.associateWithColor}</li>
        </ul>
      ))}
    </div>
  );
}
