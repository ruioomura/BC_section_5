import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'password',
  database: 'appdb'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected');
});

app.get('/api', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(4000, () => {
  console.log('API server running on port 4000');
});
