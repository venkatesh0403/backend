require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);

const uri = process.env.DB_URI;
const jwtSecret = process.env.JWT_SECRET;

mongoose
    .connect(uri)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));
    
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
