CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  role VARCHAR(50)
);

CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  employee_id INTEGER REFERENCES employees(id),
  amount NUMERIC,
  paid_at TIMESTAMP
);

INSERT INTO employees (name, role) VALUES 
('Alice', 'Developer'), 
('Bob', 'Consultant');
