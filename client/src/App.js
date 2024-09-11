import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const URL = "http://localhost:3001/colorOptions";

  const [color, setColor] = useState([]);
  const [name, setName] = useState("");
  const [colorCode, setColorCode] = useState("");
  const [associatedColor, setAssociatedColor] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  //A GET request to get all data
  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(color => setColor(color));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    const data = { name, colorCode, associatedColor };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    // A POST method to add data
    fetch(URL, requestOptions)
      .then(res => res.json())
      .then(setSubmittedData(data));
  };

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

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Color Code"
          value={colorCode}
          onChange={e => setColorCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Associated Color"
          value={associatedColor}
          onChange={e => setAssociatedColor(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <p>Name: {submittedData.name}</p>
          <p>Color Code: {submittedData.colorCode}</p>
          <p>Associated Color: {submittedData.associatedColor}</p>
        </div>
      )}
    </div>
  );
}
