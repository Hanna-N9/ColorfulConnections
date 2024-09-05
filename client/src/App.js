import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const URL = "http://localhost:3001/colorOptions";

  const [color, setColor] = useState([]);
  const [name, setName] = useState("");
  const [colorCode, setcolorCode] = useState("");
  const [something, setSomething] = useState("");

  //A GET request to get all data
  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(color => setColor(color));
  });

  const handleSubmit = e => {
    e.preventDefault(); // prevent browser from reloading and get the data on time

    const data = { name, colorCode, something };

    // A POST to add data
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // we want to get the response data in that format
      body: JSON.stringify(data), // defines the body data that we want to send to the server -- convert to JSON
    };

    fetch(URL, requestOptions)
      .then(response => response.json())
      .then(res => console.log(res)); // response is shown on the console window
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
    </div>
  );
}
