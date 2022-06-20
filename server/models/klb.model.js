const mongoose = require("mongoose");
const ClassSchema = new mongoose.Schema(
  {
    workoutName: {
      type: String,
      required: [true, "Workout name is required!!"],
      minlength: [3, "Must be at least 3 characters long"],
    },
    cap: {
      type: Number,
    },
    timeLimit: {
      type: Number,
    },
    description: {
      type: String,
      required: [true, "Class description is required!!"],
      minlength: [3, "Must be at least 3 characters long"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Class", ClassSchema);
