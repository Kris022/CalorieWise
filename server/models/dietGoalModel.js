const mongoose = require("mongoose");

const dietTrackerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  caloricGoal: {
    type: Number,
    default: 2000, // Default caloric goal
  },
  totalCaloriesConsumed: {
    type: Number,
    default: 0,
  },
  carbGoal: {
    type: Number,
    default: 300, // Default carb goal in grams
  },
  fatGoal: {
    type: Number,
    default: 70, // Default fat goal in grams
  },
  proteinGoal: {
    type: Number,
    default: 100, // Default protein goal in grams
  },
  sugarGoal: {
    type: Number,
    default: 50, // Default sugar goal in grams
  },
});

const DietTracker = mongoose.model("DietTracker", dietTrackerSchema);

module.exports = DietTracker;
