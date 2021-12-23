import styled from "styled-components";
import Footer from "../../components/home/footer";
import HospitalFeature from "../../components/intro/introFeature";

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

  @media all and (max-width: 1320px) and (min-width: 1100px) {
    width: 80%;
  }

  @media all and (max-width: 1099px) {
    width: 95%;
  }
`;

const IntroHospitalBodyFirst = styled.div`
  display: flex;
  width: 100%;

  @media all and (max-width: 935px) {
    flex-direction: column;
  }
`;

const IntroHospitalBodyFirstLeft = styled.div`
  width: 50%;

  img {
    width: 80%;
    height: 50rem;
  }

  @media all and (max-width: 935px) {
    width: 90%;
    margin: auto;

    img {
      width: 100%;
      height: 40rem;
    }
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

  @media all and (max-width: 935px) and (min-width: 710px) {
    width: 90%;
    margin: auto;

    h2 {
      margin-top: 3rem;
      font-size: 3rem;
    }

    h3 {
      margin-top: 2rem;
      font-size: 9rem;
    }

    p {
      margin-top: 2rem;
      font-size: 2.8rem;
    }
  }

  @media all and (max-width: 709px) and (min-width: 510px) {
    width: 100%;

    h2 {
      margin-top: 3rem;
      font-size: 2.2rem;
    }

    h3 {
      margin-top: 2rem;
      font-size: 7rem;
    }

    p {
      margin-top: 2rem;
      font-size: 2rem;
    }
  }

  @media all and (max-width: 509px) and (min-width: 380px) {
    width: 95%;
    margin: auto;

    h2 {
      margin-top: 3rem;
      font-size: 1.8rem;
    }

    h3 {
      margin-top: 2rem;
      font-size: 5rem;
    }

    p {
      margin-top: 2rem;
      font-size: 1.5rem;
    }
  }

  @media all and (max-width: 379px) {
    width: 95%;
    margin: auto;

    h2 {
      margin-top: 3rem;
      font-size: 1.8rem;
    }

    h3 {
      margin-top: 2rem;
      font-size: 5rem;
    }

    p {
      margin-top: 2rem;
      font-size: 1.3rem;
    }
  }
`;

const IntroHospitalBodySecond = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 5rem;
`;

// <IntroHospitalBodySecond>
//   <IntroHospitalBodySecondBox>
//     <IntroHospitalBodyBoxOdd>
//       <h2>마리아유외과는 진료의 질을 높이는 예약제 병원입니다.</h2>
//       <p>
// 예약제로 일일 환자 수를 제한하며, 많은 수의 환자를 봐드릴 수
// 없지만 <br /> 대기 시간을 줄이면서, 한 분 한 분 충실한 진료를
// 받으 실 수 있도록 노력하고 있습니다.
//       </p>
//     </IntroHospitalBodyBoxOdd>
//   </IntroHospitalBodySecondBox>
//   <IntroHospitalBodySecondBox>
//     <IntroHospitalBodyBoxEven>
//       <h2>마리아유외과는 유방-갑상선 전문 Total Care Clinic</h2>
//       <p>
// 서울 아산병원 유방 내분비 외과에서 전문의로 재직했던 김정경
// 원장의 실력과 <br />
// 우수한 영상장비, 직원들의 높은 따듯한 서비스로 진료를 완성되게
// 합니다.
//       </p>
//     </IntroHospitalBodyBoxEven>
//   </IntroHospitalBodySecondBox>
//   <IntroHospitalBodySecondBox>
//     <IntroHospitalBodyBoxOdd>
//       <h2>유방암-갑상선암 검진의 원스톱 시스템</h2>
//       <p>
//         여러 번 방문하는 번거로움 없이 모든 검사가 당일 가능합니다.
//         <br />
//         검진의 결과 상담 및 유방암이나 갑상선암으로 진단된 환자분의
//         치료 경과에 대한 상담, <br /> 수술 후 관리 및 생활에 대한
//         상담에 가족과 같은 마음으로 진료합니다.
//       </p>
//     </IntroHospitalBodyBoxOdd>
//   </IntroHospitalBodySecondBox>
//   <IntroHospitalBodySecondBox>
//     <IntroHospitalBodyBoxEven>
//       <h2>
//         마리아유외과는 검사의 정확성을 높이기위해 고가의 영상장비를
//         구비하고 있습니다.
//       </h2>
//       <p>
//         작은 이상도 잘 찾을수 있는 최적의 장비로 조기암을 발견해
//         내는데 최선의 노력을 하고 있는 병원입니다.
//       </p>
//     </IntroHospitalBodyBoxEven>
//   </IntroHospitalBodySecondBox>
//   <IntroHospitalBodySecondBox>
//     <IntroHospitalBodyBoxOdd>
//       <h2>마리아유외과는 불안한 여성들의 마음을 잘 알고 있습니다.</h2>
//       <p>
// 유방은 직접 눈으로 보고 손으로 만져보고 진찰해야 합니다.
// <br />
// 여성들은 남에게 보여주기 힘든 신체부위를 노출해야하고 <br />
// 남에게 하기 힘든 말을 해야 하지만 궁금한 것이 있어도 잘 물어볼
// 수 없습니다. <br /> 두 분의 실력있는 여의사 선생님과 함께
// 소중한 당신의 유방을 지키십시오.
//       </p>
//     </IntroHospitalBodyBoxOdd>
//   </IntroHospitalBodySecondBox>
//   <IntroHospitalBodySecondBox>
//     <IntroHospitalBodyBoxEven>
//       <h2>마리아유외과는 VABB 바늘 일회사용을 준수 하고 있습니다.</h2>
//       <p>
//         다소 비용이 증가되더라도 환자분의 위생을 위하여 VABB 바늘
//         일회사용을 준수 하는 병원입니다.
//       </p>
//     </IntroHospitalBodyBoxEven>
//   </IntroHospitalBodySecondBox>
//   <IntroHospitalBodySecondBox>
//     <IntroHospitalBodyBoxOdd>
//       <h2>
//         마리아유외과 예약에서 필요서류까지 빠짐없이 도와드립니다.
//       </h2>
//       <p>
//         경북대학교병원, 계명대학교 동산의료원, 대구가톨릭대학교병원,
//         <br /> 삼성서울병원, 서울대학교병원, 서울아산병원,
//         세브란스병원,
//         <br />
//         영남대학교의료원(가나다라순)의 상호 긴밀한 진료 협력체계로
//         더욱 신뢰가는 병원입니다.
//       </p>
//     </IntroHospitalBodyBoxOdd>
//   </IntroHospitalBodySecondBox>
// </IntroHospitalBodySecond>;

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
        <HospitalFeature />
        <Footer />
      </IntroHospitalWrapper>
    </IntroHospitalContainer>
  );
};

export default IntroHospital;
