require('dotenv').config(); 
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI); // Corrected the environment variable name
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1);
  }
};
connectDB() 
require('./locations');
