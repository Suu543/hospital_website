import styled from "styled-components";
import Link from "next/link";

const TopMiddleContainer = styled.div`
  margin-top: 25vh;
  margin-bottom: 20vh;
  width: 100%;

  @media all and (max-width: 1650px) and (min-width: 1500px) {
    margin-top: 15vh;
  }

  @media all and (max-width: 1499px) and (min-width: 1370px) {
    margin-top: 10vh;
  }

  @media all and (max-width: 1369px) and (min-width: 966px) {
    margin-top: 0;
  }

  @media all and (max-width: 965px) {
    margin-top: 0;
    margin-bottom: 10vh;
  }
`;

const TopMiddleWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  margin: auto;
  flex-wrap: wrap;

  @media all and (max-width: 764px) {
    gap: 1rem;
  }
`;

const TopMiddleCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  border-left: 4px solid #f2f2f2;
  margin: auto 0;
  font-family: "Noto Sans KR", sans-serif;
  gap: 2rem;
  cursor: pointer;

  h1 {
    font-size: 2.5rem;
  }

  span {
    font-size: 1.5rem;
    color: #c1c1c1;
  }

  &:first-of-type {
    background-color: #348fe6;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h1 {
      color: white;
      text-align: left;
      font-size: 2.8rem;
    }

    h4 {
      color: white;
      font-size: 1.5rem;
      text-align: left;
    }
  }

  @media all and (max-width: 1499px) and (min-width: 765px) {
    width: 50%;
    height: 300px;
  }

  @media all and (max-width: 764px) {
    width: 90%;
    border: 4px solid #f2f2f2;
  }
`;

const TopMiddleCardBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;

  h1 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 3rem;
    font-weight: bold;
  }

  span {
    font-size: 1.5rem;
    color: #585858;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid black;
  }
`;

const TopMiddle = () => {
  return (
    <TopMiddleContainer>
      <TopMiddleWrapper>
        <Link href="./intro/introHospital">
          <TopMiddleCard>
            <h1>
              마리아유외과
              <br /> 둘러보기
            </h1>
            <h4>
              마리아유외과
              <br /> 소식을 알아보세요!
            </h4>
          </TopMiddleCard>
        </Link>
        <TopMiddleCard>
          <h1>진료안내</h1>
          <span>대표전화</span>
          <TopMiddleCardBottom>
            <h1>053-252-6875</h1>
            <span>진료시간보기</span>
          </TopMiddleCardBottom>
        </TopMiddleCard>
        <Link href="./intro/locations">
          <TopMiddleCard>
            <h1>찾아오시는 길</h1>
            <span>대중교통 및 위치 안내</span>
            <img src="../mainLocation.png" />
          </TopMiddleCard>
        </Link>
        <Link href="./intro/introMedicalStaff">
          <TopMiddleCard>
            <h1>의료진소개</h1>
            <span>의료진 둘러보기</span>
            <img src="../doctors.png" />
          </TopMiddleCard>
        </Link>
      </TopMiddleWrapper>
    </TopMiddleContainer>
  );
};

export default TopMiddle;
