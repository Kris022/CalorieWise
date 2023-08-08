// User goal operations
const express = require("express");
const {
  getAllGoals,
  createGoals,
  updateGoals,
} = require("../controllers/goalsController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// Requires valid user to use the food routes
router.use(requireAuth);

// Endpoints
// GET all goals
router.get("/", getAllGoals);

// POST a new goals
router.post("/", createGoals);

// PATCH updates a specific food by its ID
router.patch("/:foodId", updateGoals);

module.exports = router;
