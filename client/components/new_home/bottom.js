import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { getBoards } from "../../actions/board";
import moment from "moment";

const BottomContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  width: 100%;
`;

const BottomWrapper = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media all and (max-width: 1650px) and (min-width: 1325px) {
    margin: auto;
    width: 70%;
  }

  @media all and (max-width: 1324px) and (min-width: 1185px) {
    margin: auto;
    width: 80%;
  }

  @media all and (max-width: 1184px) {
    margin: auto;
    width: 90%;
    gap: 0;
  }
`;

const BottomBoardLeftWrapper = styled.div`
  width: 45%;
  min-height: 40vh;
  margin: auto;

  @media all and (max-width: 764px) {
    width: 90%;
    min-height: 40vh;
    margin: auto;
  }
`;

const BottomBoardRightWrapper = styled.div`
  width: 45%;
  min-height: 40vh;
  margin: auto;

  @media all and (max-width: 764px) {
    width: 90%;
    min-height: 40vh;
    margin: auto;
  }
`;

const BottomBoardHeadWrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 2px solid black;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
`;

const BottomBoardLeftHeading = styled.h1`
  font-family: "Noto Sans KR", sans-serif;
`;

const BottomBoardRightHeading = styled.h1`
  font-family: "Noto Sans KR", sans-serif;
`;

const BottomBoardHeadLogo = styled.a`
  font-size: 3rem;
  opacity: 0.5;
  cursor: pointer;
`;

const BottomBoardBody = styled.div`
  width: 100%;
`;

const BottomBoardBodyContent = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 2rem;
  display: flex;
  padding: 1.5rem;
  border-bottom: 1px solid grey;
  justify-content: space-between;
  pointer: cursor;

  h4 {
    color: #828282;
    font-size: 1.2rem;
  }

  span {
    color: #828282;
    font-size: 1rem;
  }
`;

const Bottom = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getBoards();
      setBoards(data.slice(0, 5));
    }

    fetchData();
  }, []);

  return (
    <BottomContainer>
      <BottomWrapper>
        <BottomBoardLeftWrapper>
          <BottomBoardHeadWrapper>
            <BottomBoardLeftHeading>공지사항</BottomBoardLeftHeading>
            <Link href="/">
              <BottomBoardHeadLogo>+</BottomBoardHeadLogo>
            </Link>
          </BottomBoardHeadWrapper>
          <BottomBoardBody>
            {boards.map((board) => {
              return (
                <Link href="/">
                  <BottomBoardBodyContent>
                    <h4>{board.title}</h4>
                    <span>{moment(board.updatedAt).format("YYYY-MM-DD")}</span>
                  </BottomBoardBodyContent>
                </Link>
              );
            })}
          </BottomBoardBody>
        </BottomBoardLeftWrapper>
        <BottomBoardRightWrapper>
          <BottomBoardHeadWrapper>
            <BottomBoardRightHeading>병원뉴스</BottomBoardRightHeading>
            <Link href="/">
              <BottomBoardHeadLogo>+</BottomBoardHeadLogo>
            </Link>
          </BottomBoardHeadWrapper>
          <BottomBoardBody>
            {boards.map((board) => {
              return (
                <Link href="/">
                  <BottomBoardBodyContent>
                    <h4>{board.title}</h4>
                    <span>{moment(board.updatedAt).format("YYYY-MM-DD")}</span>
                  </BottomBoardBodyContent>
                </Link>
              );
            })}
          </BottomBoardBody>
        </BottomBoardRightWrapper>
      </BottomWrapper>
    </BottomContainer>
  );
};

export default Bottom;
