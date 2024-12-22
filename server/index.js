const express = require('express');
const cors = require('cors');
const path = require('path');
const apiRoutes = require('./routes/api.js'); // Ensure the path is correct
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
