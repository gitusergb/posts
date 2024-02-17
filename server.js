const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/authRoutes');
const {postRouter} = require('./routes/postRoutes');

dotenv.config();

const {connection} = require("./db")
const app = express();
app.use(express.json());
app.use(cors())
app.use('/users',authRouter);
app.use('/posts',postRouter);
app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.send('Welcome To Social App page');
//   });

  const PORT = process.env.PORT || 3000;
app.listen(PORT,async() => {
  try {
    await connection
    console.log("Database connection Established")
    console.log(`Server is running at http://localhost:${PORT}`);
}
catch {
    console.log("Database connection Failed")
}
console.log("Server Started")
})
