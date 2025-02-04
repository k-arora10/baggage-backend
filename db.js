const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config(); // load env variables

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connected");
  } catch (err) {
    console.error("mongodb connection failed", err);
    process.exit(1);
  }
};

module.exports = connectDB;
