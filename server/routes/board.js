const express = require("express");
const router = express.Router();

const {
  readAllBoards,
  createBoard,
  readBoard,
} = require("../controllers/board");

router.get("/boards", readAllBoards);
router.get("/board/:id", readBoard);
router.post("/board", createBoard);

module.exports = router;
