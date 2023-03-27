import express from "express";
import Restaurant from "../model/restaurant.js";

const restaurantRouter = express.Router();

restaurantRouter.post("/nearest", async (req, res) => {
  console.log(" request body", req.body);
  const currentLocation = req.body.location;
  console.log("currentLocation:", currentLocation);
  try {
    const nearestRestaurant = await Restaurant.findOne({
      location: {
        $near: {
          $geometry: currentLocation,
          $maxDistance: 1000,
        },
      },
    }).exec();
    res.send(nearestRestaurant);
  } catch (e) {
    console.log(e);
  }
});

restaurantRouter.get("/add", async (req, res) => {
  const newRestaurant = new Restaurant({
    name: "mongol restaurants",
    address: {
      coord: [-72.98241, 41.57],
    },
  });
  newRestaurant.save();
  res.status(200).send("success");
});

restaurantRouter.post("/find", async (req, res) => {
  console.log("req body", req.body);
  const restaurantLocation = req.body.address;
  console.log("restaurant location", restaurantLocation);

  const Nearest = await Restaurant.find({
    "address.coord": {
      $near: {
        $geometry: restaurantLocation,
        $maxDistance: 5000,
      },
    },
  }).exec();
  console.log(Nearest);
});

export default restaurantRouter;
