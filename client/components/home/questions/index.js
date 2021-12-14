import { useState } from "react";
import styled, { css } from "styled-components";

const QuestionContainer = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  /* background-color: #fff8e3;
  opacity: 1;
  background-image: radial-gradient(#ffffff 2px, #fff8e3 2px);
  background-size: 40px 40px;
  overflow: hidden; */
`;

const QuestionWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 1467px) and (min-width: 1399px) {
    width: 90%;
  }

  @media all and (max-width: 1398px) and (min-width: 1301px) {
    width: 95%;
  }

  @media all and (max-width: 1300px) {
    width: 90%;
  }

  @media all and (max-width: 1200px) and (min-width: 965px) {
    flex-direction: column;
    width: 95%;
  }

  @media all and (max-width: 964px) {
    flex-direction: column;
    width: 100%;
  }
`;

const QuestionLists = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 60%;
  height: 100%;
  justify-content: center;

  h2 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 5rem;
    width: 90%;
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  @media all and (max-width: 1300px) and (min-width: 1201px) {
    width: 50%;
  }

  @media all and (max-width: 1200px) {
    margin-top: 3rem;
    width: 100%;

    h2 {
      margin-bottom: 1.5rem;
    }
  }
`;

const QuestionList = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const QuestionHead = css`
  font-size: 1.8rem;
  padding: 3rem;
  border: 1px solid #e7e7e7;
  font-family: "Josefin Sans", sans-serif;
  font-weight: bolder;

  @media all and (max-width: 1200px) {
    padding: 2.5rem;
  }
`;

const QuestionBody = css`
  display: none;
  padding: 1rem 3rem;
  font-size: 1.7rem;
  font-family: "Josefin Sans", sans-serif;
  font-family: 500;
  color: #696969;
  border: 1px solid #e7e7e7;
  border-top: none;
  line-height: 1.5;
`;

const FirstQuestionHead = styled.div`
  ${QuestionHead}
  ${(props) =>
    props.collapse
      ? css`
          border-bottom: none;
        `
      : css`
          border-bottom: 1px solid #e7e7e7;
        `}
`;

const FirstQuestionBody = styled.div`
  ${QuestionBody}
  ${(props) =>
    props.collapse
      ? css`
          display: flex;
        `
      : css`
          display: hidden;
        `}
`;

const SecondQuestionHead = styled.div`
  ${QuestionHead}
  ${(props) =>
    props.collapse
      ? css`
          border-bottom: none;
        `
      : css`
          border-bottom: 1px solid #e7e7e7;
        `}
`;

const SecondQuestionBody = styled.div`
  ${QuestionBody}
  ${(props) =>
    props.collapse
      ? css`
          display: flex;
        `
      : css`
          display: hidden;
        `}
`;

const ThirdQuestionHead = styled.div`
  ${QuestionHead}
  ${(props) =>
    props.collapse
      ? css`
          border-bottom: none;
        `
      : css`
          border-bottom: 1px solid #e7e7e7;
        `}
`;

const ThirdQuestionBody = styled.div`
  ${QuestionBody}
  ${(props) =>
    props.collapse
      ? css`
          display: flex;
        `
      : css`
          display: hidden;
        `}
`;
const QuestionImageWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  img {
    position: relative;
    width: 35rem;
    height: 40rem;
  }

  @media all and (max-width: 1300px) {
    width: 50%;
  }

  @media all and (max-width: 1200px) and (min-width: 676px) {
    img {
      width: 40rem;
      height: 45rem;
    }
  }

  @media all and (max-width: 675px) {
    width: 100%;

    img {
      position: static;
      display: block;
      width: 30rem;
      height: 30rem;
    }

    align-items: center;
    margin: 2rem auto;
    gap: 2rem;
  }
`;

const FirstImg = styled.img`
  left: 15rem;
  top: 12rem;

  @media all and (max-width: 1200px) and (min-width: 900px) {
    left: 15rem;
    top: 7rem;
  }

  @media all and (max-width: 899px) and (min-width: 676px) {
    left: 8rem;
    top: 7rem;
  }
`;
const SecondImg = styled.img`
  top: -10rem;

  @media all and (max-width: 1200px) and (min-width: 900px) {
    top: -20rem;
  }

  @media all and (max-width: 899px) and (min-width: 676px) {
    top: -23rem;
    left: -10rem;
  }
`;

const Questions = () => {
  const [firstCollapse, setFirstCollapse] = useState(false);
  const [secondCollapse, setSecondCollapse] = useState(false);
  const [thirdCollapse, setThirdCollapse] = useState(false);

  return (
    <QuestionContainer>
      <QuestionWrapper>
        <QuestionLists>
          <h2>Q&A</h2>
          <QuestionList>
            <FirstQuestionHead
              collapse={firstCollapse}
              onClick={() => setFirstCollapse(!firstCollapse)}
            >
              What should I expect in my patient room
            </FirstQuestionHead>
            <FirstQuestionBody collapse={firstCollapse}>
              The staff will familiarize patient and family with the room, the
              nurse call system, bed control mechanism, telephone, and other
              devices and services. Patients receive an admission kit with
              personal items.
            </FirstQuestionBody>
          </QuestionList>
          <QuestionList>
            <SecondQuestionHead
              onClick={() => setSecondCollapse(!secondCollapse)}
              collapse={secondCollapse}
            >
              What should I expect in my patient room
            </SecondQuestionHead>
            <SecondQuestionBody collapse={secondCollapse}>
              The staff will familiarize patient and family with the room, the
              nurse call system, bed control mechanism, telephone, and other
              devices and services. Patients receive an admission kit with
              personal items.
            </SecondQuestionBody>
          </QuestionList>
          <QuestionList>
            <ThirdQuestionHead
              collapse={thirdCollapse}
              onClick={() => setThirdCollapse(!thirdCollapse)}
            >
              What should I expect in my patient room
            </ThirdQuestionHead>
            <ThirdQuestionBody collapse={thirdCollapse}>
              The staff will familiarize patient and family with the room, the
              nurse call system, bed control mechanism, telephone, and other
              devices and services. Patients receive an admission kit with
              personal items.
            </ThirdQuestionBody>
          </QuestionList>
        </QuestionLists>
        <QuestionImageWrapper>
          <FirstImg src="/consult1.jpg" />
          <SecondImg src="/consult2.jpg" />
        </QuestionImageWrapper>
      </QuestionWrapper>
    </QuestionContainer>
  );
};

export default Questions;
