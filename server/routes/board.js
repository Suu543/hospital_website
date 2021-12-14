const express = require("express");
const router = express.Router();

const { readAllBoards, createBoard } = require("../controllers/board");

router.get("/boards", readAllBoards);
router.post("/board", createBoard);

module.exports = router;
