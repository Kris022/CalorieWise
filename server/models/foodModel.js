const mongoose = require("mongoose");

// Define the Food schema
const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
  },
  date: {
    type: Date,
    required: true,
  },
  protein: {
    type: Number,
    required: true,
  },
  carbs: {
    type: Number,
    required: true,
  },
  fats: {
    type: Number,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
});

// Create the Food model using the schema
const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
