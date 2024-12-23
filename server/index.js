const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const app = express();
const db =require('./db_config/db');

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
  const { email, username, firstname, lastname, password } = req.body;

  const sql = 'INSERT INTO user (email, username, first_name, last_name, password) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [email, username, firstname, lastname, password], (err, result) => {
    if (err) {
      console.error('Error registering user:', err);
      return res.status(500).json({ message: 'Error registering user' });
    }
    res.status(200).json({ message: 'Registration successful', iduser: result.insertId });
  });
});

app.post('/login',(req,res)=>{
  const {username,password}=req.body;

  const sql ='SELECT * FROM user WHERE (username=? OR email=?) AND password =?';
  db.query(sql,[username ,username,password],(err,result)=>{
    if (err) {
      return res.status(500).json({ message: 'Server error' });
    }

    if (results.length > 0) {
      res.status(200).json({ message: 'Login successful', user: result[0] });
    } else {
      res.status(401).json({ message: 'Invalid username/email or password' });
    }
  });
});
  
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
