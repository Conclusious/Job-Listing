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
    res.status(200).json({ 
      message: 'Registration successful', 
      iduser: result.insertId,
      firstname: firstname,
      lastname: lastname,
    });
  });
});

app.post('/login',(req,res)=>{
  const {username,password}=req.body;

  const sql ='SELECT email,username,first_name AS firstname,last_name AS lastname FROM user WHERE (username=? OR email=?) AND password =?';
  db.query(sql,[username ,username,password],(err,result)=>{
    if (err) {
      return res.status(500).json({ message: 'Server error' });
    }

    if (result.length > 0) {
      res.status(200).json({
        message: 'Login successful',
        firstname: result[0].firstname,
        lastname: result[0].lastname,
        username: result[0].username,
        email: result[0].email,
        });
    } else {
      res.status(401).json({ message: 'Invalid username/email or password' });
    }
  });
});
  
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

app.post('/jobpost', (req, res) => {
    const {job_title, workplace, job_type, company, job_location, description}=req.body;
    const sql = 'INSERT INTO job (job_title, workplace, job_type, company, job_location, description) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [job_title, workplace, job_type, company, job_location, description], (err, result) => {
      if(err){
        console.error('Error posting job:', err);
        return res.status(500).json({message: 'Error posting job'});
      }
      res.status(200).json({message: 'Job posted successful', jobID: result.insertId});
    });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
