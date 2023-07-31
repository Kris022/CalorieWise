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
});

// Create the Food model using the schema
const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
