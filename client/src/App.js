import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("...")
      .then(res => res.json())
      .then(setData());
  }, []);

  <div>
    <h1>Colerful Connections in Progress</h1>

    {data.map(item => (
      <div key={item.id}>{item.colorName}</div>
    ))}
  </div>;
}
