const express = require("express");
const router = express.Router();

const requireAuth = require("../middleware/requireAuth");

const {
  getAllFoods,
  getFoodById,
  createFood,
  updateFood,
  deleteFood,
  getFoodsByDate,
} = require("../controllers/foodController");

// Requires valid user to use the food routes
router.use(requireAuth);

// Endpoints
// GET all foods
router.get("/", getAllFoods);

// GET a specific food by its ID
// router.get("/:foodId", getFoodById);

// GET foods for specific date
router.get("/:date", getFoodsByDate);

// POST a new food
router.post("/", createFood);

// PUT updates a specific food by its ID
router.patch("/:foodId", updateFood);

// DELETE a specific food by its ID
router.delete("/:foodId", deleteFood);

module.exports = router;
