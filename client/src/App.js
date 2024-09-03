import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/colorOptions")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>Colerful Connections in Progress</h1>

      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
