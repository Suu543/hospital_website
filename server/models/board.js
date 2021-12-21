const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      min: 5,
      max: 70,
      required: true,
    },

    body: {
      type: {},
      min: 100,
      max: 20000,
      required: true,
    },

    created_at: {
      type: Date,
      default: Date.now,
    },

    postedBy: {
      type: String,
      default: "Admin",
    },
  },
  {
    timestamps: true,
  }
);

const Board = mongoose.model("Board", boardSchema);

module.exports = {
  Board,
};
