const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// connect database
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
const hotelRoutes = require("./routes/hotelRoutes");
app.use("/api/hotels", hotelRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Hotel Booking Backend Running 🚀");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});