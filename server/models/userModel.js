const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum password length should be 6 characters
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  calorieGoal: {
    type: Number,
    default: 2000, // Default calorie goal
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

// Signup new user
userSchema.statics.signup = async function (email, password) {
  // Validations

  // Check if the user doesn't already exist
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

// Login
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect login details.");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect login details");
  }

  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
