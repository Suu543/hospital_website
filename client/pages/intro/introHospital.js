import styled from "styled-components";
import Intro from "../../components/home/intro";
import Footer from "../../components/home/footer";

const IntroHospitalContainer = styled.div`
  width: 100%;
  margin-top: 8rem;
  background: #ffffff;
`;

const IntroHospitalWrapper = styled.div`
  width: 100%;
`;

const IntroHospitalTop = styled.div`
  width: 100%;
  min-height: 35vh;
  background-image: linear-gradient(
      90deg,
      rgba(54, 53, 57, 1) 0%,
      rgba(20, 5, 12, 0.8071603641456583) 86%
    ),
    url("../introbackground.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;

  h4 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 2rem;
    font-weight: lighter;
    color: white;
  }

  h2 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 5rem;
    font-weight: bold;
    color: white;
    margin-bottom: 5rem;
  }

  h3 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 1.5rem;
    font-weight: lighter;
    color: white;
    text-align: center;
  }
`;

const IntroHospitalBody = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
`;

const IntroHospitalBodyFirst = styled.div`
  display: flex;
  width: 100%;
`;

const IntroHospitalBodyFirstLeft = styled.div`
  width: 50%;

  img {
    width: 80%;
    height: 50rem;
  }
`;

const IntroHospitalBodyFirstRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 5rem;
  justify-content: space-around;

  h2 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 2.5rem;
  }

  h3 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 7rem;
    color: #eeeeee;
  }

  p {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 2rem;
  }
`;

const IntroHospital = () => {
  return (
    <IntroHospitalContainer>
      <IntroHospitalWrapper>
        <IntroHospitalTop>
          <h4>GREETING</h4>
          <h2>인사말</h2>
          <h3>
            마리아유외과를 방문해주신 모든 분들께 <br /> 감사의 마음을 전합니다
          </h3>
        </IntroHospitalTop>
        <IntroHospitalBody>
          <IntroHospitalBodyFirst>
            <IntroHospitalBodyFirstLeft>
              <img src="../doctor2.png" />
            </IntroHospitalBodyFirstLeft>
            <IntroHospitalBodyFirstRight>
              <h2>
                안녕하세요! 반갑습니다! <br /> 저희 마리아유외과를 찾아주셔서
                <br />
                진심으로 감사드립니다.
              </h2>
              <h3>GREETING</h3>
              <p>
                유방 및 갑상선의 정기 검진에서부터 암이 아닌 양성질환의 관리,
                조기암의 발견에 이르기까지 <br />
                모든 진료에서 여러분의 불안을 깨끗이 씻을 수 있게 시원하고
                명쾌한 해답을 드리는 병원
              </p>
            </IntroHospitalBodyFirstRight>
          </IntroHospitalBodyFirst>
        </IntroHospitalBody>
        <Intro />
        <Footer />
      </IntroHospitalWrapper>
    </IntroHospitalContainer>
  );
};

export default IntroHospital;
