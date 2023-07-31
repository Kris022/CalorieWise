const express = require("express");
const router = express.Router();

const {
  getAllFoods,
  getFoodById,
  createFood,
  updateFood,
  deleteFood,
} = require("../controllers/foodController");

// Endpoints

// GET all foods
router.get("/", getAllFoods);

// GET a specific food by its ID
router.get("/:foodId", getFoodById);

// POST a new food
router.post("/", createFood);

// PUT/PATCH update a specific food by its ID
router.put("/:foodId", updateFood);
// Alternatively, you can use "patch" instead of "put" if you want to partially update the food.

// DELETE a specific food by its ID
router.delete("/:foodId", deleteFood);

module.exports = router;
