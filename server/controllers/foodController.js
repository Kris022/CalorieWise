const mongoose = require("mongoose");
const Food = require("../models/foodModel");

const getAllFoods = async (req, res) => {
  const foods = await Food.find({});
  res.status(200).json(foods);
};

const getFoodById = async (req, res) => {
  const { foodId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(foodId)) {
    return res.status(400).json({ error: "Invalid food ID." });
  }

  try {
    const food = await Food.findById(foodId);
    if (!food) {
      return res.status(404).json({ error: "Food not found." });
    }
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ error: "Error occurred while fetching the food." });
  }
};

const createFood = async (req, res) => {
  const { name, calories, amount, protein, carbs, fats } = req.body;

  try {
    const food = await Food.create({ name, calories, amount, protein, carbs, fats });
    res.status(201).json(food);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateFood = async (req, res) => {
  const { foodId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(foodId)) {
    return res.status(400).json({ error: "Invalid food ID." });
  }

  try {
    const updatedFood = await Food.findByIdAndUpdate(foodId, { ...req.body }, { new: true });
    if (!updatedFood) {
      return res.status(404).json({ error: "Food not found." });
    }
    res.status(200).json(updatedFood);
  } catch (error) {
    res.status(500).json({ error: "Error occurred while updating the food." });
  }
};

const deleteFood = async (req, res) => {
  const { foodId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(foodId)) {
    return res.status(400).json({ error: "Invalid food ID." });
  }

  try {
    const deletedFood = await Food.findByIdAndDelete(foodId);
    if (!deletedFood) {
      return res.status(404).json({ error: "Food not found." });
    }
    res.status(200).json(deletedFood);
  } catch (error) {
    res.status(500).json({ error: "Error occurred while deleting the food." });
  }
};

module.exports = {
  getAllFoods,
  getFoodById,
  createFood,
  updateFood,
  deleteFood,
};
