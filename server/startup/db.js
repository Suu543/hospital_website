const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

module.exports = function () {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  const DB = process.env.MONGO_ATLAS;

  mongoose
    .connect(DB, options)
    .then(() => console.log("Connecting to DB..."))
    .catch((error) => console.log("Cannot Connect to DB...", error));
};
