const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'consultancy',
  password: 'postgres',
  port: 5432
});

app.get('/employees', async (req, res) => {
  const result = await pool.query('SELECT * FROM employees');
  res.json(result.rows);
});

app.post('/pay', async (req, res) => {
  const { employee_id, amount } = req.body;
  await pool.query(
    'INSERT INTO payments (employee_id, amount, paid_at) VALUES ($1, $2, NOW())',
    [employee_id, amount]
  );
  res.send({ status: 'Payment recorded' });
});

app.listen(3000, () => {
  console.log('Backend running on port 3000');
});
