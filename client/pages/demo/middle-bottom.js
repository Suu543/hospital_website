import styled from "styled-components";
import Link from "next/link";

const MiddleBottomContainer = styled.div`
  margin-top: 15rem;
  width: 100%;
  min-height: 50vh;
`;

const MiddleBottomTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;
  margin: auto;
  border-bottom: 5px solid #f3f3f3;
  padding-bottom: 3rem;
  margin-bottom: 10rem;
`;

const MiddleBottomTitle = styled.h1`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
  font-size: 3.5rem;
  padding: 0 1rem;
`;

const MiddleBottomPara = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.2rem;
  padding: 0 1rem;
`;

const MiddleBottomContent = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 4rem;
`;

const MiddleBottomCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background: #f3f3f3;
  gap: 2.5rem;
  cursor: pointer;
`;

const MiddleBottomCardLogo = styled.div`
  width: 40%;
  text-align: center;

  img {
    width: 70%;
  }
`;

const MiddleBottomCardContent = styled.div`
  h4 {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 2rem;
    color: #717171;
  }
`;

// ---------------------------------------------
const MiddleBottomMiddleWrapper = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 6rem;
  display: flex;
  flex-wrap: wrap;
  background-color: #fffdfd;
  opacity: 1;
  background-image: radial-gradient(
    ellipse farthest-corner at 9px 9px,
    #ffffff,
    #ffffff 50%,
    #fffdfd 50%
  );
  background-size: 9px 9px;
`;

const MiddleBottomMiddleFirstCard = styled.div`
  display: flex;
  width: 50%;
  height: 28rem;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5rem;

  h3 {
    font-size: 3.3rem;
    font-weight: bold;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

const MiddleBottomMiddleCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 28rem;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  background: ${(props) => `url(${props.imgSrc}) no-repeat center center`};

  h3 {
    font-size: 3rem;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

const MiddleBottomMiddleFirstTitle = styled.h3`
  color: black;
`;

const MiddleBottomMiddleTitle = styled.h3`
  color: #184c4c;
`;

const MiddleBottomMiddleLink = styled.a`
  color: #184c4c;
  font-size: 2rem;
  font-weight: 600;
  border-bottom: 2px solid #184c4c;
  padding-bottom: 5px;
  cursor: pointer;
`;

const MiddleBottomCardComponent = ({ title, imgSrc }) => {
  return (
    <Link href="/">
      <MiddleBottomCard>
        <MiddleBottomCardLogo>
          <img src={imgSrc} />
        </MiddleBottomCardLogo>
        <MiddleBottomCardContent>
          <h4>{title}</h4>
        </MiddleBottomCardContent>
      </MiddleBottomCard>
    </Link>
  );
};

// ----------------------------------------------------------
const MiddleBottomMiddleComponent = ({ title, imgSrc }) => {
  return (
    <MiddleBottomMiddleCard imgSrc={imgSrc}>
      <MiddleBottomMiddleTitle>{title}</MiddleBottomMiddleTitle>
      <Link href="/">
        <MiddleBottomMiddleLink>more</MiddleBottomMiddleLink>
      </Link>
    </MiddleBottomMiddleCard>
  );
};

const MiddleBottomMiddleFirstCardComponent = ({ title }) => {
  return (
    <MiddleBottomMiddleFirstCard>
      <MiddleBottomMiddleFirstTitle>{title}</MiddleBottomMiddleFirstTitle>
    </MiddleBottomMiddleFirstCard>
  );
};

// ----------------------------------------------------------
const MiddleBottom = () => {
  return (
    <MiddleBottomContainer>
      <MiddleBottomTopWrapper>
        <MiddleBottomTitle>진료과목안내</MiddleBottomTitle>
        <MiddleBottomPara>
          건강한 가슴을 위한 병원 마리아유외과
          <br />
          제대로 된 유방 검진이야마로 유방암으로 인한 사망률을 낮추는 길입니다.
        </MiddleBottomPara>
        <MiddleBottomContent>
          <MiddleBottomCardComponent
            imgSrc="./doctor.png"
            title="유방 클리닉"
          />
          <MiddleBottomCardComponent
            imgSrc="./machine.png"
            title="VABB 클리닉"
          />
          <MiddleBottomCardComponent
            imgSrc="./thyroid.png"
            title="갑상선 클리닉"
          />
          <MiddleBottomCardComponent
            imgSrc="./documents.png"
            title="진료안내"
          />
        </MiddleBottomContent>
      </MiddleBottomTopWrapper>
      <MiddleBottomMiddleWrapper>
        <MiddleBottomMiddleFirstCardComponent title="마리아유외과 소식" />
        <MiddleBottomMiddleComponent
          imgSrc="./card-background1.jpg"
          title="자주묻는질문"
        />
        <MiddleBottomMiddleComponent
          imgSrc="./card-background2.jpg"
          title="의료진소개"
        />
        <MiddleBottomMiddleComponent
          imgSrc="./card-background3.jpg"
          title="병원둘러보기"
        />
      </MiddleBottomMiddleWrapper>
    </MiddleBottomContainer>
  );
};

export default MiddleBottom;
