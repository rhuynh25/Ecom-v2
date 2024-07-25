const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: 3306,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

connection.connect((err) => {
  if (err) {
    console.error('Failed to connect', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.use(cors());


app.use(express.static(path.join(__dirname, 'build')));
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

console.log(path.join(__dirname));
app.use('/ecom-img', express.static(path.join(__dirname, 'src', 'ecom-img')));


app.get('/api/products', (req, res) => {
  const query = 'SELECT * FROM ecomDB';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching MySQL:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log('Received products:', results);
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});