const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    check: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
