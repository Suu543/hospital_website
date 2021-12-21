import styled from "styled-components";
import { useState, useEffect } from "react";
import moment from "moment";
import { getBoards } from "../../actions/board";
import Link from "next/link";

const BoardContainer = styled.div`
  margin-top: 17vh;
  width: 100%;
`;

const BoardWrapper = styled.div`
  width: 55%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoardHeader = styled.div`
  h1 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 3.5rem;
    margin-bottom: 5rem;
    padding-bottom: 1rem;
    color: #004c4c;
    border-bottom: 3px solid #2d40bb;
  }
`;

const BoardTable = styled.table`
  width: 100%;
  min-height: 50vh;
  margin: auto;

  border-collapse: collapse;
  border: 2px solid rgb(200, 200, 200);
  letter-spacing: 1px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.8rem;

  td,
  th {
    border-top: none;
    border-bottom: 2px solid #fff;
  }

  thead,
  tfoot {
    padding: 20px 10px 20px 20px;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 14px;
  }

  tbody {
    background-color: #dedede;
    cursor: pointer;

    tr:nth-of-type(even) {
      color: white;
      background-color: #ffffff;
    }
  }

  td,
  th {
    border: 1px solid rgb(190, 190, 190);
    text-align: left;
    border: none;
  }

  th {
    padding: 1.5rem 1rem;
  }

  td {
    font-size: 1.3rem;
    padding: 1.2rem 1.5rem;
  }
`;

const BoardNavigation = styled.ul`
  padding: 15px;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  padding-left: 0;
  border-top: 1px solid #dee2e6;
  padding-top: 15px;

  li {
    padding: 6px 8px;
    min-width: 32px;
    min-height: 32px;
    border-radius: 8px;
    margin-left: 0;
    margin-right: 8px;
    border: 1px solid #fff;
    font-size: 12px;
    font-weight: 500;
    color: #8a93a6;
    display: inline-block;
    text-align: center;
    cursor: pointer;
  }

  li:hover {
    background-color: #ebf2fd;
    color: #5a8dee;
  }
`;

const Board = () => {
  const [boards, setBoards] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [postPerPage, SetPostPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);
  const [pageItem, SetPageItem] = useState({
    start: 0,
    end: postPerPage,
  });

  const onPageChangeEvent = (start, end) => {
    SetPageItem({
      start: start,
      end: end,
    });
  };

  useEffect(() => {
    async function fetchAndCachingData() {
      const data = await getBoards();
      console.log(data);
      if (data) {
        await cachingData(data);
      }
    }

    fetchAndCachingData();
  }, []);

  useEffect(() => {
    let tempNumberOfButtons = [...arrOfCurrButtons];

    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";

    if (pagination.length < 6) {
      tempNumberOfButtons = pagination;
    } else if (currentPage >= 1 && currentPage <= 3) {
      tempNumberOfButtons = [1, 2, 3, 4, dotsInitial, pagination.length];
    } else if (currentPage === 4) {
      const sliced = pagination.slice(0, 5);
      tempNumberOfButtons = [...sliced, dotsInitial, pagination.length];
    } else if (currentPage > 4 && currentPage < pagination.length - 2) {
      // from 5 to 8 (10 - 2)
      const sliced1 = pagination.slice(currentPage - 2, currentPage);
      const sliced2 = pagination.slice(currentPage, currentPage + 1);
      tempNumberOfButtons = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        pagination.length,
      ];
    } else if (currentPage > pagination.length - 3) {
      // > 7
      const sliced = pagination.slice(pagination.length - 4);
      tempNumberOfButtons = [1, dotsLeft, ...sliced];
    } else if (currentPage === dotsInitial) {
      // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3
      // arrOfCurrButtons[3] = 4 + 1 = 5
      // or
      // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
      // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
      setCurrentPage(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (currentPage === dotsRight) {
      setCurrentPage(arrOfCurrButtons[3] + 2);
    } else if (currentPage === dotsLeft) {
      setCurrentPage(arrOfCurrButtons[3] - 2);
    }

    setArrOfCurrButtons(tempNumberOfButtons);
    const value = currentPage * postPerPage;

    onPageChangeEvent(value - postPerPage, value);
  }, [currentPage, postPerPage, pagination]);

  const cachingData = async (data) => {
    setBoards(data);

    let pages = [];

    for (let i = 1; i <= Math.ceil(data.length / postPerPage); i++) {
      pages.push(i);
    }

    setPagination(pages);
    setCurrentPage(1);
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  const prevPageClick = () => {
    if (currentPage === 1) {
      setCurrentPage(currentPage);
      handlePagination(currentPage, currentPage);
    } else {
      setCurrentPage(currentPage - 1);
      handlePagination(currentPage - 1, currentPage - 1);
    }
  };

  const nextPageClick = () => {
    if (currentPage === pagination.length) {
      setCurrentPage(setCurrentPage);
      handlePagination(currentPage, currentPage);
    } else {
      setCurrentPage(setCurrentPage + 1);
      handlePagination(currentPage + 1, currentPage + 1);
    }
  };

  return (
    <BoardContainer>
      <BoardWrapper>
        <BoardHeader>
          <h1>게시판</h1>
        </BoardHeader>
        <BoardTable>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody>
            {boards &&
              boards.slice(pageItem.start, pageItem.end).map((board, index) => {
                return (
                  <Link href={`/info/board/${board._id}`}>
                    <tr key={index}>
                      <td>{boards.indexOf(board) + 1}</td>
                      <td>{board.title}</td>
                      <td>{board.postedBy}</td>
                      <td>{moment(board.updatedAt).format("YYYY-MM-DD")}</td>
                    </tr>
                  </Link>
                );
              })}
          </tbody>
        </BoardTable>
        <BoardNavigation>
          <li onClick={prevPageClick}>&laquo;</li>
          {arrOfCurrButtons &&
            arrOfCurrButtons.map((page) =>
              currentPage == page ? (
                <li
                  style={{
                    backgroundColor: "#5a8dee",
                    borderColor: "#5a8dee",
                    color: "#fff",
                  }}
                  key={page}
                  onClick={() => handlePagination(page, page)}
                >
                  {page}
                </li>
              ) : (
                <li key={page} onClick={() => handlePagination(page, page)}>
                  {page}
                </li>
              )
            )}
          <li onClick={nextPageClick}>&raquo;</li>
        </BoardNavigation>
      </BoardWrapper>
    </BoardContainer>
  );
};

export default Board;
