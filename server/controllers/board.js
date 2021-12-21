const { Board } = require("../models/board");

exports.readAllBoards = async (req, res) => {
  try {
    console.log(req.query);
    const boards = await Board.find({});

    if (boards) res.status(200).json(boards);
  } catch (error) {
    return res.status(400).json({
      error: "Failed to load boards",
    });
  }
};

exports.createBoard = async (req, res) => {
  const { title, body } = req.body;
  const board = new Board({ title, body });

  try {
    await board.save();
    return res.status(201).json({
      message: "Board is successfully created...",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Failed to create Boad",
    });
  }
};

exports.readBoard = async (req, res) => {
  const { id } = req.params;

  try {
    const singleBoard = await Board.findById({ _id: id });
    if (!singleBoard) {
      return res.status(404).json({
        error: `ID not found...`,
      });
    }

    return res.status(200).json(singleBoard);
  } catch (error) {
    return res.status(404).json({
      error: `ID not found...`,
    });
  }
};
