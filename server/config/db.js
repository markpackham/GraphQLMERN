const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  // we use the colors package to get the "cyan" text in the terminal so it's easier to read
  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;

// What my local database looks like in my .env
// MONGO_URI = 'mongodb://localhost:27017/graphql_mern'
