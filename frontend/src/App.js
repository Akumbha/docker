import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/employees")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      {data.map(emp => (
        <p key={emp.id}>{emp.name}</p>
      ))}
    </div>
  );
}

export default App;
