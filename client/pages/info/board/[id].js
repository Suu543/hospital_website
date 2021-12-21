import styled from "styled-components";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getBoard } from "../../../actions/board";
import moment from "moment";

const SingleBoardContainer = styled.div`
  margin-top: 17vh;
  width: 100%;
`;

const SingleBoardWrapper = styled.div`
  width: 55%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SingleBoardHeader = styled.div`
  h1 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 3.5rem;
    margin-bottom: 5rem;
    padding-bottom: 1rem;
    color: #004c4c;
    border-bottom: 3px solid #2d40bb;
  }
`;

const SingleBoardBody = styled.div`
  width: 100%;
  min-height: 50vh;
  border: 10px solid #f6f6f6;
  padding: 1rem;

  p {
    font-size: 1.4rem;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

const SingleBoardBodyHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const SingleBoardBodyElement = styled.div`
  display: flex;
  gap: 5rem;

  span {
    font-size: 1.5rem;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

const SingleBoard = () => {
  const { query } = useRouter();
  const [board, setBoard] = useState({});

  useEffect(() => {
    async function getSingleBoard(id) {
      const data = await getBoard(id);
      console.log(data);
      setBoard(data);
    }

    getSingleBoard(query.id);
  }, []);

  return (
    <SingleBoardContainer>
      <SingleBoardWrapper>
        <SingleBoardHeader>
          <h1>게시판</h1>
        </SingleBoardHeader>
        <SingleBoardBody>
          <SingleBoardBodyHeader>
            <SingleBoardBodyElement>
              <span>제목</span>
              <span>{board.title}</span>
            </SingleBoardBodyElement>
            <SingleBoardBodyElement>
              <span>작성자</span>
              <span>{board.postedBy}</span>
            </SingleBoardBodyElement>
            <SingleBoardBodyElement>
              <span>작성일</span>
              <span>{moment(board.created_at).format("YYYY-MM-DD")}</span>
            </SingleBoardBodyElement>
            <hr />
          </SingleBoardBodyHeader>
          <div dangerouslySetInnerHTML={{ __html: board.body }}></div>
        </SingleBoardBody>
      </SingleBoardWrapper>
    </SingleBoardContainer>
  );
};

export default SingleBoard;
