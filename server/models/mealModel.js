const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Food = require('./foodModel'); // Import the Food model

// Define the schema for the Meal collection
const mealSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  foods: [
    {
      food: {
        type: Schema.Types.ObjectId,
        ref: 'Food',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalCalories: {
    type: Number,
    default: 0,
  },
});

// Define a pre-save hook to automatically calculate the total calories for the meal
mealSchema.pre('save', async function (next) {
  let totalCalories = 0;

  if (this.foods.length > 0) {
    try {
      // Fetch all the referenced foods and calculate the total calories
      const foodIds = this.foods.map((foodEntry) => foodEntry.food);
      const foods = await Food.find({ _id: { $in: foodIds } });

      this.foods.forEach((foodEntry) => {
        const foundFood = foods.find((food) => food._id.equals(foodEntry.food));
        if (foundFood) {
          totalCalories += foundFood.caloriesPerServing * foodEntry.quantity;
        }
      });
    } catch (error) {
      return next(error);
    }
  }

  this.totalCalories = totalCalories;
  next();
});

// Create the Meal model based on the schema
const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;
