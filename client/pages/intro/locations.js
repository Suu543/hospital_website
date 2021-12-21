import { Fragment, useState } from "react";
import styled from "styled-components";
import FirstMap from "../../components/maps/firstMap";
import SecondMap from "../../components/maps/secondMap";

const LocationContainer = styled.div`
  width: 100%;
  margin-top: 8rem;
  background: #ffffff;
`;

const LocationWrapper = styled.div`
  width: 100%;
`;

const LocationTop = styled.div`
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

const LocationTopWrapper = styled.div``;

const Locations = () => {
  const [location, setLocation] = useState(true);

  return (
    <LocationContainer>
      <LocationWrapper>
        <LocationTop>
          <h4>LOCATION</h4>
          <h2>오시는 길</h2>
          <h3>
            마리아유외과를 방문해주신 모든 분들께 <br /> 감사의 마음을 전합니다
          </h3>
        </LocationTop>
        <LocationTopWrapper>
          <button onClick={() => setLocation(!location)}>Change</button>
          {location ? <FirstMap /> : <SecondMap />}
        </LocationTopWrapper>
      </LocationWrapper>
    </LocationContainer>
  );
};

export default Locations;
