import axios from "axios";

export const createBoard = async (boardData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/api/board`,
      boardData
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getBoards = async () => {
  try {
    // `${process.env.REACT_APP_API}/api/boards?page=1&limit=5`
    console.log("getBoard");
    const response = await axios.get(`${process.env.REACT_APP_API}/api/boards`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getBoard = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/api/board/${id}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
