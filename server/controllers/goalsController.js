const mongoose = require("mongoose");
const DietGoal = require("../models/dietGoalModel");

const getAllGoals = async (req, res) => {
  const user_id = req.user._id;

  try {
    const foods = await DietGoal.findOne({ user_id });
    res.status(200).json(foods);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createGoals = async (req, res) => {
  const { calorieGoal, proteinGoal, carbGoal, fatGoal, sugarGoal } = req.body;

  try {
    const user_id = req.user._id;

    const userGoals = await DietGoal.create({
      user_id: user_id,
      caloricGoal: calorieGoal,
      proteinGoal: proteinGoal,
      carbGoal: carbGoal,
      fatGoal: fatGoal,
      sugarGoal: sugarGoal,
    });

    res.status(201).json(userGoals);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateGoals = async (req, res) => {
  // Do not update date

  const { foodId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(foodId)) {
    return res.status(400).json({ error: "Invalid food ID." });
  }

  const updatedFood = await Food.findByIdAndUpdate(foodId, { ...req.body });

  if (!updatedFood) {
    return res.status(404).json({ error: "Food not found." });
  }
  res.status(200).json(updatedFood);
};

module.exports = {
  getAllGoals,
  createGoals,
  updateGoals,
};
