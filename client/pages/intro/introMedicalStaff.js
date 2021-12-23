import styled from "styled-components";
import Footer from "../../components/home/footer";

const IntroMedicalStaffContainer = styled.div`
  width: 100%;
  margin-top: 8rem;
  background: #eeedf1;
`;

const IntroMedicalStaffWrapper = styled.div`
  width: 100%;
`;

const IntroMedicalStaffTop = styled.div`
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

  @media all and (max-width: 428px) {
    h4 {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 1.5rem;
      font-weight: lighter;
      color: white;
    }

    h2 {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 4rem;
      font-weight: bold;
      color: white;
      margin-bottom: 5rem;
    }

    h3 {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 1.2rem;
      font-weight: lighter;
      color: white;
      text-align: center;
    }
  }
`;

const IntroMedicalStaffMiddle = styled.div`
  width: 60%;
  display: flex;
  margin: auto;
  margin-bottom: 10rem;

  @media all and (max-width: 1675px) and (min-width: 1250px) {
    width: 80%;
  }

  @media all and (max-width: 1249px) and (min-width: 790px) {
    width: 100%;
  }

  @media all and (max-width: 789px) {
    width: 100%;
    flex-direction: column;
  }
`;

const IntroMedicalStaffLeft = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: center;

  img {
    width: 40rem;
    height: 50rem;
  }

  @media all and (max-width: 999px) and (min-width: 790px) {
    img {
      width: 35rem;
    }
  }

  @media all and (max-width: 789px) {
    width: 90%;

    img {
      width: 40rem;
      height: 30rem;
    }
  }
`;

const IntroMedicalStaffRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 3rem;
    border-bottom: 2px solid #497da4;
    padding-bottom: 2rem;

    span {
      font-size: 4rem;
      color: #497da4;
    }
  }

  h4 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 2.5rem;
    margin: 1.5rem 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;

    li {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 2rem;
    }
  }

  @media all and (max-width: 999px) {
    h2 {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 2rem;
      border-bottom: 2px solid #497da4;
      padding-bottom: 2rem;

      span {
        font-size: 3.5rem;
        color: #497da4;
      }
    }

    h4 {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 2rem;
      margin: 1.5rem 0;
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;

      li {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 1.5rem;
      }
    }
  }

  @media all and (max-width: 789px) and (min-width: 475px) {
    width: 90%;
    margin: auto;

    h2 {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 2rem;
      border-bottom: 2px solid #497da4;
      padding-bottom: 2rem;
      text-align: center;
      margin-top: 2rem;

      span {
        font-size: 3rem;
        color: #497da4;
      }
    }

    h4 {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 2rem;
      margin: 1.5rem 0;
      text-align: center;
    }

    ul {
      width: 65%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;

      li {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 1.5rem;
      }
    }
  }

  @media all and (max-width: 474px) {
    width: 90%;
    margin: auto;

    h2 {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 1.8rem;
      border-bottom: 2px solid #497da4;
      padding-bottom: 2rem;
      text-align: center;
      margin-top: 2rem;

      span {
        font-size: 2.8rem;
        color: #497da4;
      }
    }

    h4 {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 2rem;
      margin: 1.5rem 0;
      text-align: center;
    }

    ul {
      width: 85%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1rem;

      li {
        font-family: "Noto Sans KR", sans-serif;
        font-size: 1.5rem;
      }
    }
  }
`;

const IntroMedicalStaff = () => {
  return (
    <IntroMedicalStaffContainer>
      <IntroMedicalStaffWrapper>
        <IntroMedicalStaffTop>
          <h4>INTRODUCTION OF THE MEDICAL STAFF</h4>
          <h2>의료진 소개</h2>
          <h3>
            마리아유외과를 방문해주신 모든 분들께 <br /> 감사의 마음을 전합니다
          </h3>
        </IntroMedicalStaffTop>
        <IntroMedicalStaffMiddle>
          <IntroMedicalStaffLeft>
            <img src="../doctor2.png" />
          </IntroMedicalStaffLeft>
          <IntroMedicalStaffRight>
            <h2>
              마리아유외과 수성점 <span>원장 김정경</span>
            </h2>
            <h4>경력사항</h4>
            <ul>
              <li>- 외과 전문의</li>
              <li>- 서울아산병원 유방/내분비 외과 전임의</li>
              <li>- 서울아산병원 외과 외래 부교수</li>
              <li>- 대구카톨릭대학교 의과대학 외과 외래교수</li>
              <li>- 대한외과학회 회원</li>
              <li>- 대한갑상선내분비 외과학회 회원</li>
              <li>- 대한갑상선학회 회원</li>
              <li>- 유방 인정의</li>
              <li>- 대구유방갑상선외과의사회 이사</li>
              <li>- 대구유방갑상선학회 회원</li>
              <li>- 대구유방갑상선의사회 부회장</li>
            </ul>
          </IntroMedicalStaffRight>
        </IntroMedicalStaffMiddle>
        <IntroMedicalStaffMiddle>
          <IntroMedicalStaffLeft>
            <img src="../doctor1.png" />
          </IntroMedicalStaffLeft>
          <IntroMedicalStaffRight>
            <h2>
              마리아유외과 반월당점 <span>원장 김정경</span>
            </h2>
            <h4>경력사항</h4>
            <ul>
              <li>- 외과 전문의</li>
              <li>- 대구가톨릭대학교 의학석사</li>
              <li>- 대구가톨릭대학교 병원 외과 전임의</li>
              <li>- 대구가톨릭대학교 뱡원 외과 임상조교수</li>
              <li>- 대한외과학회 회원</li>
              <li>- 한국유방암학회 회원</li>
              <li>- 대한외과초음파 연구회 회원</li>
              <li>- 대한갑상선내분비 외과학회 회원</li>
              <li>- 대구유방갑상선학회 회원</li>
            </ul>
          </IntroMedicalStaffRight>
        </IntroMedicalStaffMiddle>
      </IntroMedicalStaffWrapper>
      <Footer />
    </IntroMedicalStaffContainer>
  );
};

export default IntroMedicalStaff;
