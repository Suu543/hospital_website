const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

// Routes
const boardRoutes = require("../routes/board");

module.exports = function (app) {
  app.use(express.json({ limit: "50mb", type: "application/json" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  app.use(morgan("dev"));
  app.use(helmet());
  app.use(cors());

  app.use("/api", boardRoutes);
};
