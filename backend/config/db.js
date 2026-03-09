const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://hoteladmin345:hotel123@cluster0.mxmgg00.mongodb.net/hotelDB?retryWrites=true&w=majority"
    );

    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("Database connection failed ❌");
    console.log(error);
  }
};

module.exports = connectDB;