import styled from "styled-components";

const BottomFooterContainer = styled.div`
  width: 100%;
  background-color: #2990ff;
  min-height: 35vh;
  display: flex;
`;

const BottomFooterWrapper = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
`;

const BottomFooterLeftWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 4rem;
  gap: 2rem;
`;

const BottomFooterLeftHeader = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  h6 {
    font-size: 3rem;
    color: white;
  }
`;

const BottomFooterLeftTimeWrapper = styled.div`
  display: flex;
  font-family: "Noto Sans KR", sans-serif;

  span {
    font-size: 1.8rem;
    font-weight: light;
    color: white;
  }

  b {
    font-size: 1.8rem;
    color: white;
  }
`;

const BottomFooterRightWrapper = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-left: 3rem;
`;

const BottomFooterRightFirstWrapper = styled.div`
  h3 {
    font-family: "Noto Sans KR", sans-serif;
    color: white;
    font-size: 4rem;
  }

  h4 {
    font-family: "Noto Sans KR", sans-serif;
    color: white;
    font-size: 3rem;
  }
`;

const BottomFooterRightSecondWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  img {
    width: 6rem;
    height: 6rem;
  }

  span {
    font-family: "Noto Sans KR", sans-serif;
    color: white;
    font-size: 3rem;
    font-weight: bold;
  }
`;

const BottomFooter = () => {
  return (
    <BottomFooterContainer>
      <BottomFooterWrapper>
        <BottomFooterLeftWrapper>
          <BottomFooterLeftHeader>
            <img src="./timer.png" />
            <h6>진료시간</h6>
          </BottomFooterLeftHeader>
          <BottomFooterLeftTimeWrapper>
            <span>평일 - &nbsp;</span>
            <b> am 10:00 ~ pm 17:30 (수요일 제외)</b>
          </BottomFooterLeftTimeWrapper>
          <BottomFooterLeftTimeWrapper>
            <span>점심시간 -&nbsp;</span>
            <b>pm 13:00 ~ pm 14:30</b>
          </BottomFooterLeftTimeWrapper>
          <BottomFooterLeftTimeWrapper>
            <span>토요일 - &nbsp;</span>
            <b>am 10:00 ~ pm 13:00 (매달 다섯째 토요일 휴진)</b>
          </BottomFooterLeftTimeWrapper>
          <BottomFooterLeftTimeWrapper>
            <b>(휴진 - 매달 1, 2, 4, 5번째 수요일 정기 휴무)</b>
          </BottomFooterLeftTimeWrapper>
          <BottomFooterLeftTimeWrapper>
            <b>일요일 및 공휴일은 휴무입니다.</b>
          </BottomFooterLeftTimeWrapper>
        </BottomFooterLeftWrapper>
        <BottomFooterRightWrapper>
          <BottomFooterRightFirstWrapper>
            <h3>053-252-6875</h3>
            <h4>대구 수성구 명덕로 414 (수성시장역 60m)</h4>
          </BottomFooterRightFirstWrapper>
          <BottomFooterRightSecondWrapper>
            <img src="./kakao.png" />
            <span>카카오톡채널: @마리아유외과</span>
          </BottomFooterRightSecondWrapper>
        </BottomFooterRightWrapper>
      </BottomFooterWrapper>
    </BottomFooterContainer>
  );
};

export default BottomFooter;
