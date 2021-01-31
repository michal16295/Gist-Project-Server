const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    gender: {
      type: String,
      enum: ["Female", "Male"],
      default: "female",
      required: true,
    },
    operation: {
      type: String,
      minlength: 1,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
