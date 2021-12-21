import styled from "styled-components";
import breakpoint from "../../../commons/breakpoints";

const IntroContainer = styled.section`
  width: 100%;
  background-color: #ffffff;
  height: auto;
  min-height: 100% !important;
  padding-bottom: 5vh;
  opacity: 1;
  background-image: radial-gradient(
    ellipse farthest-corner at 4px 4px,
    #fff8e3,
    #fff8e3 50%,
    #ffffff 50%
  );
  background-size: 4px 4px;
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const IntroHeader = styled.div`
  width: 65%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media all and (max-width: 1650px) and (min-width: 1275px) {
    width: 90%;
  }

  @media all and (max-width: 1274px) {
    margin-top: 4rem;
  }
`;

const IntroHeaderBox = styled.div`
  flex: 1 1 25rem;
  height: 30rem;
  background-color: white;
  border: 1px solid #e7e7e7;
  overflow: hidden;
  position: relative;
  margin-top: -14rem !important;
  margin-bottom: 8rem;
  margin-left: 1rem;
  z-index: 500;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 3rem;

  &:hover {
    top: -2rem;
    border-bottom: 5px solid #a66d3f;
  }

  h4 {
    color: #004c4c;
    font-size: 2rem;
    font-weight: bolder;
    font-family: "Noto Sans KR", sans-serif;
  }

  @media all and (max-width: 1650px) and (min-width: 1275px) {
    flex: 1 1 15rem;
  }

  @media all and (max-width: 1274px) {
    margin-top: 0rem !important;
    /* flex: 1 1 30rem; */
    flex-basis: 30rem;
    height: 30rem;
    margin-bottom: 1rem;
    gap: 3rem;
  }
`;

const IntroHeaderBoxLogo = styled.div`
  width: 30%;
  text-align: center;

  img {
    width: 70%;
  }
`;

const IntroHeaderBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: #696981;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
    font-family: "Noto Sans KR", sans-serif;
  }

  a {
    color: #a66d6a;
    font-size: 1.3rem;
    font-weight: bold;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

const IntroBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const IntroBodyHeader = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10rem;

  h4 {
    font-size: 1.6rem;
    font-family: "Noto Sans KR", sans-serif;
    color: #004c4c;
  }

  h2 {
    font-size: 3.5rem;
    font-family: "Noto Sans KR", sans-serif;
    color: #004c4c;
    margin-bottom: 3rem;
  }

  @media all and (max-width: 1278px) and (min-width: 1025px) {
    h2 {
      margin-top: 5rem;
    }
  }

  @media all and (max-width: 1024px) and (min-width: 870px) {
    h2 {
      margin-top: 5rem;
    }

    h4 {
      margin-bottom: 5rem;
    }
  }

  @media all and (max-width: 869px) and (min-width: 640px) {
    h2 {
      margin-top: 5rem;
      font-size: 2.5rem;
    }

    h4 {
      margin-bottom: 5rem;
    }
  }

  @media all and (max-width: 639px) and (min-width: 500px) {
    h2 {
      margin-top: 5rem;
      font-size: 2rem;
    }

    h4 {
      margin-bottom: 5rem;
      font-size: 1.3rem;
    }
  }

  @media all and (max-width: 499px) {
    h2 {
      margin-top: 5rem;
      font-size: 1.5rem;
    }

    h4 {
      margin-bottom: 5rem;
      font-size: 1.1rem;
    }
  }
`;

const IntroBodyContent = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  flex-wrap: wrap;
  position: relative;

  @media all and (max-width: 1285px) {
  }
`;

const IntroBodyContentImages = styled.div`
  flex: 1 1 40rem;

  img {
    width: 35rem;
    height: 40rem;
    border-radius: 8%;
    position: absolute;
  }

  @media all and (max-width: 1283px) and (min-width: 1023px) {
    img {
      position: relative;
      width: 30rem;
      height: 35rem;
    }
  }

  @media all and (max-width: 1024px) and (min-width: 820px) {
    display: flex;
    justify-content: center;
    gap: 1rem;

    img {
      width: 35rem;
      height: 40rem;
      position: relative;
    }
  }

  @media all and (max-width: 819px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    img {
      position: static;
    }
  }
`;

const IntroBodyContentFirstImg = styled.img`
  top: 20rem;
  left: 5rem;

  @media all and (max-width: 1500px) and (min-width: 1285px) {
    top: 25rem;
    left: -5rem;
  }

  @media all and (max-width: 1283px) and (min-width: 1025px) {
    top: 15rem;
    left: -5rem;
  }

  @media all and (max-width: 1024px) {
    top: 0;
    left: 0;
  }
`;

const IntroBodyContentSecondImg = styled.img`
  top: 5rem;
  left: 25rem;

  @media all and (max-width: 1500px) and (min-width: 1284px) {
    top: 10rem;
    left: 15rem;
  }

  @media all and (max-width: 1283px) and (min-width: 1025px) {
    top: -5rem;
    left: 10rem;
  }

  @media all and (max-width: 1024px) {
    top: 0;
    left: 0;
  }
`;

const IntroBodyContentsMain = styled.div`
  flex: 1 1 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  gap: 1.5rem;

  h2 {
    font-size: 3rem;
    font-weight: bold;
    font-family: "Noto Sans KR", sans-serif;
    color: #004c4c;
    margin-top: 5rem;
  }

  p {
    padding: 2rem 0;
    color: #696969;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  button {
    background-color: #a66d3f;
    color: white;
    font-size: 2rem;
    border: none;
    outline: none;
    padding: 20px 40px;
    border-radius: 10px;

    a,
    i {
      color: white;
    }
  }
`;

const IntroBodyContentCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const IntroBodyContentCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 2rem;

  h3 {
    font-size: 2rem;
    color: #004c4c;
  }
`;
const IntroBodyContentCardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderBoxComponent = ({ title, imgSrc }) => {
  return (
    <IntroHeaderBox>
      <IntroHeaderBoxLogo>
        <img src={imgSrc} />
      </IntroHeaderBoxLogo>
      <h4>{title}</h4>
      <IntroHeaderBoxContent>
        <p>
          See our information about <br />
          mental health care
        </p>
        <a>Learn More</a>
      </IntroHeaderBoxContent>
    </IntroHeaderBox>
  );
};

const IntroHeaderComponent = () => {
  return (
    <IntroHeader>
      <HeaderBoxComponent imgSrc="./doctor.png" title="유방클리닉" />
      <HeaderBoxComponent imgSrc="./machine.png" title="VABB 클리닉" />
      <HeaderBoxComponent imgSrc="./thyroid.png" title="갑상선 클리닉" />
      <HeaderBoxComponent imgSrc="./file.png" title="진료안내" />
    </IntroHeader>
  );
};

const IntroBodyContentCardComponent = ({ title, content, imgSrc }) => {
  return (
    <IntroBodyContentCard>
      <IntroBodyContentCardHeader>
        <img src={imgSrc} />
        <h3>{title}</h3>
      </IntroBodyContentCardHeader>
      <IntroBodyContentCardBody>
        <p>{content}</p>
      </IntroBodyContentCardBody>
    </IntroBodyContentCard>
  );
};

const IntroBodyComponent = () => {
  return (
    <IntroBody>
      <IntroBodyHeader>
        <h2>유방암-갑상선암 검진의 원스톱 시스템</h2>
        <h4>마리아유외과는 불안한 여성들의 마음을 잘 알고 있습니다.</h4>
      </IntroBodyHeader>
      <IntroBodyContent>
        <IntroBodyContentImages>
          <IntroBodyContentFirstImg src="/consult1.jpg" alt="consult1" />
          <IntroBodyContentSecondImg src="/consult2.jpg" alt="consult2" />
        </IntroBodyContentImages>
        <IntroBodyContentsMain>
          <h2>왜 마리아유외과인가?</h2>
          <IntroBodyContentCardComponent
            title="원스톱 시스템"
            content="여러 번 방문하는 번거로움 없이 모든 검사가 당일 가능합니다. 검진의 결과 상담 및 유방암이나 갑상선암으로 진단된 환자분의 치료 경과에 대한 상담, 수술 후 관리 및 생활에 대한 상담에 가족과 같은 마음으로 진료합니다."
            imgSrc="../healthcare.png"
          />
          <IntroBodyContentCardComponent
            title="불안한 여성들의 마음"
            content="유방은 직접 눈으로 보고 손으로 만져보고 진찰해야 합니다.
    여성들은 남에게 보여주기 힘든 신체부위를 노출해야하고 남에게
    하기 힘든 말을 해야 하지만 궁금한 것이 있어도 잘 물어볼 수
    없습니다. 두 분의 실력있는 여의사 선생님과 함께 소중한 당신의 유방을
    지키십시오."
            imgSrc="../woman.png"
          />
          <IntroBodyContentCardComponent
            title="유방갑상선 전문 Total Care Clinic"
            content="서울 아산병원 유방 내분비 외과에서 전문의로 재직했던 김정경 원장의 실력과 우수한 영상장비, 직원들의 높은 따뜻한 서비스로 진료를 완성되게 합니다."
            imgSrc="../medical-check.png"
          />
        </IntroBodyContentsMain>
      </IntroBodyContent>
    </IntroBody>
  );
};

// const Intro = () => {
//   return (
//     <IntroContainer>
//       <IntroWrapper>
//         <IntroHeaderComponent />
//         <IntroBodyComponent />
//       </IntroWrapper>
//     </IntroContainer>
//   );
// };

const Intro = () => {
  return (
    <IntroContainer>
      <IntroWrapper>
        <IntroBodyComponent />
      </IntroWrapper>
    </IntroContainer>
  );
};

export default Intro;
