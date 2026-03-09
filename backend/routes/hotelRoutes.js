const express = require("express");
const router = express.Router();
const Hotel = require("../models/Hotel");

// create hotel
router.post("/add", async (req, res) => {
  try {
    const hotel = new Hotel(req.body);
    await hotel.save();
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get all hotels
router.get("/", async (req, res) => {
  try {

    const { location } = req.query;

    let hotels;

    if(location){
      hotels = await Hotel.find({
        location: { $regex: location, $options: "i" }
      });
    } else {
      hotels = await Hotel.find();
    }

    res.json(hotels);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// delete hotel
router.delete("/:id", async (req, res) => {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);

    if (!deletedHotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    res.json({ message: "Hotel deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;