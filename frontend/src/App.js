import React, { useEffect, useState } from 'react';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/employees')
      .then(res => res.json())
      .then(data => setEmployees(data));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Employee Payments</h1>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>{emp.name} - {emp.role}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
