import styled from "styled-components";

const FeatureContainer = styled.section`
  width: 100%;
  min-height: 140vh;
  background-color: #eeeeee;
`;

const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FeatureHeader = styled.div`
  margin-top: 10vh;

  h4 {
    font-size: 2.3rem;
    font-family: "Noto Sans KR", sans-serif;
    color: #004c4c;
    text-align: center;
  }

  h2 {
    font-size: 4rem;
    font-weight: bold;
    font-family: "Noto Sans KR", sans-serif;
    color: #004c4c;
    text-align: center;
    margin-top: 3rem;
  }

  @media all and (max-width: 494px) and (min-width: 420px) {
    h4 {
      font-size: 1.8rem;
    }
  }

  @media all and (max-width: 419px) {
    h4 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 3rem;
    }
  }
`;

const FeatureBody = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  margin: 7rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

const FeatureBodyBox = styled.div`
  flex-basis: 40rem;
  height: 40rem;
  background-color: white;
  border-radius: 5%;
  transition: all 0.2s ease-in-out;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem;
  gap: 3rem;

  &:hover {
    box-shadow: 2px 5px 16px 0px rgb(174, 179, 184), -13px 3px 28px 22px #f9f5f1;
  }

  @media all and (max-width: 1461px) and (min-width: 1180px) {
    flex-basis: 40rem;
    height: 40rem;
    justify-content: center;
    align-items: center;
  }

  @media all and (max-width: 1179px) {
    flex-basis: 40rem;
  }
`;

const FeatureBodyLogo = styled.div`
  width: 30%;

  img {
    width: 100%;
  }
`;

const FeatureBodyHeading = styled.h4`
  color: #004c4c;
  font-size: 2.6rem;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
`;

const FeatureBodyContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  p {
    color: #696969;
    font-size: 1.9rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const FeatureHeaderComponent = () => {
  return (
    <FeatureHeader>
      <h4>
        의사들이 가족을 위해 선택하는 병원 마리아유외과 <br /> - 유방전문클리닉
        -
      </h4>
      <h2>마리아유외과 병원소개</h2>
    </FeatureHeader>
  );
};

const FeatureBodyCard = ({ imgSrc, title, content }) => {
  return (
    <FeatureBodyBox>
      <FeatureBodyLogo>
        <img src={imgSrc} />
      </FeatureBodyLogo>
      <FeatureBodyHeading>{title}</FeatureBodyHeading>
      <FeatureBodyContent>
        <p>{content}</p>
      </FeatureBodyContent>
    </FeatureBodyBox>
  );
};

const FeatureBodyComponent = () => {
  return (
    <FeatureBody>
      <FeatureBodyCard
        imgSrc="../../booking.png"
        title="예약제 병원"
        content="마리아 유외과는 진료의 질을 높이는 예약제 병원입니다."
      />
      <FeatureBodyCard
        imgSrc="../../machine.png"
        title="고가의 영상장비"
        content="마리아 유외과는 검사의 정확성을 높이기위해 고가의 영상장비를 구비하고 있습니다."
      />
      <FeatureBodyCard
        imgSrc="../../contract.png"
        title="예약에서 필요서류까지"
        content="마리아 유외과는 예약에서 필요서류까지 빠짐없이 도와드립니다."
      />
      <FeatureBodyCard
        imgSrc="../../injection.png"
        title="VABB 바늘 일회사용을 준수"
        content="마리아 유외과는 VABB 바늘 일회사용을 준수 하고 있습니다."
      />
      <FeatureBodyCard
        imgSrc="../../doctor_woman.png"
        title="불안한 여성들의 마음"
        content="마리아 유외과는 불안한 여성들의 마음을 잘 알고 있습니다."
      />
      <FeatureBodyCard
        imgSrc="../../medical-assistance.png"
        title="원스톱 시스템"
        content="유방암, 갑상선암 검진의 원스톱 시스템"
      />
    </FeatureBody>
  );
};

const IntroHospitalFeature = () => {
  return (
    <FeatureContainer>
      <FeatureWrapper>
        <FeatureHeaderComponent />
        <FeatureBodyComponent />
      </FeatureWrapper>
    </FeatureContainer>
  );
};

export default IntroHospitalFeature;
