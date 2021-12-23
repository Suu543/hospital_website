import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #a7caf2;
`;

const BottomFooterContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media all and (max-width: 1349px) and (min-width: 1185px) {
    margin: auto;
    width: 85%;
  }

  @media all and (max-width: 1184px) and (min-width: 379px) {
    margin: auto;
    width: 95%;
  }

  @media all and (max-width: 378px) {
    width: 100%;
  }
`;

const BottomFooterWrapper = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;

  @media all and (max-width: 1349px) and (min-width: 1185px) {
    margin: auto;
    width: 85%;
  }

  @media all and (max-width: 1184px) and (min-width: 379px) {
    margin: auto;
    width: 95%;
  }

  @media all and (max-width: 378px) {
    width: 100%;
  }
`;

const BottomFooterLeftWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  padding-left: 4rem;
  gap: 2rem;

  @media all and (max-width: 1184px) and (min-width: 379px) {
    width: 90%;
    margin: auto;
    margin-top: 7rem;
    justify-content: center;
    align-items: center;
  }

  @media all and (max-width: 378px) {
    margin-top: 7rem;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const BottomFooterLeftHeader = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
  align-items: center;

  h6 {
    font-size: 3rem;
    color: white;
  }
`;

const BottomFooterLeftTimeWrapper = styled.div`
  display: flex;
  font-family: "Noto Sans KR", sans-serif;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  padding: 1rem;

  span {
    font-size: 2.5rem;
    font-weight: light;
    color: white;
    width: 10rem;
  }

  h5 {
    font-size: 1.8rem;
    color: white;
  }

  h6 {
    font-size: 2rem;
    color: white;
  }

  @media all and (max-width: 580px) and (min-width: 513px) {
    gap: 1rem;

    span {
      font-size: 2.2rem;
      font-weight: light;
      color: white;

      width: 10rem;
    }

    h5 {
      font-size: 1.6rem;
      color: white;
    }

    h6 {
      font-size: 1.7rem;
      color: white;
    }
  }

  @media all and (max-width: 512px) {
    gap: 0rem;

    span {
      font-size: 1.4rem;
      font-weight: bold;
      color: white;

      width: 8rem;
    }

    h5 {
      font-size: 1.4rem;
      color: white;
    }

    h6 {
      font-size: 1.5rem;
      color: white;
    }
  }
`;

const BottomFooterRightWrapper = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 7rem;
  padding-left: 3rem;

  @media all and (max-width: 1184px) {
    width: 90%;
    margin: auto;
    margin-bottom: 8rem;
    justify-content: center;
    align-items: center;
  }
`;

const BottomFooterRightFirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 5rem;
  gap: 3rem;
  padding: 1rem;

  h3 {
    font-family: "Noto Sans KR", sans-serif;
    color: white;
    font-size: 3.5rem;
  }

  h4 {
    font-family: "Noto Sans KR", sans-serif;
    color: white;
    font-size: 2.6rem;
    font-weight: lighter;
  }

  @media all and (max-width: 1184px) and (min-width: 670px) {
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media all and (max-width: 669px) and (min-width: 450px) {
    h3 {
      font-family: "Noto Sans KR", sans-serif;
      color: white;
      font-size: 2.8rem;
    }

    h4 {
      font-family: "Noto Sans KR", sans-serif;
      color: white;
      font-size: 2rem;
      font-weight: lighter;
    }
  }

  @media all and (max-width: 449px) {
    h3 {
      font-family: "Noto Sans KR", sans-serif;
      color: white;
      font-size: 2.5rem;
    }

    h4 {
      font-family: "Noto Sans KR", sans-serif;
      color: white;
      font-size: 1.8rem;
      font-weight: lighter;
    }
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

  @media all and (max-width: 1184px) and (min-width: 600px) {
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media all and (max-width: 599px) {
    flex-direction: column;

    img {
      width: 6rem;
      height: 6rem;
    }

    span {
      font-family: "Noto Sans KR", sans-serif;
      color: white;
      font-size: 2rem;
    }
  }
`;

const BottomFooter = () => {
  return (
    <Container>
      <BottomFooterContainer>
        <BottomFooterWrapper>
          <BottomFooterLeftWrapper>
            <BottomFooterLeftHeader>
              <img src="./deadline.png" />
              <h6>진료시간</h6>
            </BottomFooterLeftHeader>
            <BottomFooterLeftTimeWrapper>
              <span>평일</span>
              <h6>
                am 10:00 ~ pm 17:30 <br /> (수요일 제외)
              </h6>
            </BottomFooterLeftTimeWrapper>
            <BottomFooterLeftTimeWrapper>
              <span>점심시간</span>
              <h6>pm 13:00 ~ pm 14:30</h6>
            </BottomFooterLeftTimeWrapper>
            <BottomFooterLeftTimeWrapper>
              <span>토요일</span>
              <h6>am 10:00 ~ pm 13:00</h6>
            </BottomFooterLeftTimeWrapper>
            <BottomFooterLeftTimeWrapper>
              <h5>
                (휴진 - 매달 1, 2, 4, 5번째 수요일 정기 휴무) <br />
                (매달 다섯째 토요일 휴진)
              </h5>
            </BottomFooterLeftTimeWrapper>
            <BottomFooterLeftTimeWrapper>
              <h5>일요일 및 공휴일은 휴무입니다.</h5>
            </BottomFooterLeftTimeWrapper>
          </BottomFooterLeftWrapper>
          <BottomFooterRightWrapper>
            <BottomFooterRightFirstWrapper>
              <h3>053-252-6875</h3>
              <h4>
                대구 수성구 명덕로 414 <br /> (수성시장역 60m)
              </h4>
            </BottomFooterRightFirstWrapper>
            <BottomFooterRightSecondWrapper>
              <img src="./kakao.png" />
              <span>카카오톡채널: @마리아유외과</span>
            </BottomFooterRightSecondWrapper>
          </BottomFooterRightWrapper>
        </BottomFooterWrapper>
      </BottomFooterContainer>
    </Container>
  );
};

export default BottomFooter;
