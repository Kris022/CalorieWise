const mongoose = require("mongoose");

const dietGoalSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  caloricGoal: {
    type: Number,
    default: 2000, // Default caloric goal
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

const DietGoal = mongoose.model("DietGoal", dietGoalSchema);

module.exports = DietGoal;
