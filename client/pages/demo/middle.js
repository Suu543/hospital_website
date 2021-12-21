import styled from "styled-components";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";

const MiddleContainer = styled.div`
  width: 100%;
  min-height: 40vh;
  background: #f7f7f7;
  position: relative;
  margin-bottom: 10vh;
`;

const MiddleCarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 40vh;
  margin: auto;
`;

const MiddleCarouselImageWrapper = styled.div`
  width: 50%;
  position: relative;
  top: -8rem;
`;

const MiddleCarouselContent = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Noto Sans KR", sans-serif;
  width: 30%;
  margin: auto;

  h1 {
    font-size: 3rem;
    font-weight: bold;
  }

  h2 {
    font-size: 1.6rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }

  a {
    width: 10.5%;
    padding-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    display: inline-block;
    border-bottom: 2px solid black;
  }
`;

const MiddleCarouselImage = styled.img`
  opacity: 0.8;
  height: 40rem;
`;

const MiddleCarouselLegend = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: white;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
  padding-top: 4rem;

  &:before {
    content: "${(props) => props.title}";
    position: absolute;
    top: -5rem;
    left: 8rem;
    width: 60%;
    height: 1rem;
    font-size: 2.5rem;
    margin: auto;
    border-top: 2px solid white;
    padding-top: 1rem;
  }
`;

const Middle = () => {
  return (
    <MiddleContainer>
      <MiddleCarouselWrapper>
        <MiddleCarouselImageWrapper>
          <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            status={true}
            showThumbs={false}
            stopOnHover={true}
            showStatus={false}
            autoFocus={true}
          >
            <div>
              <MiddleCarouselImage src="./test-background1.jpg" />
              <MiddleCarouselLegend title="예약제 병원">
                마리아 유외과는 진료의
                <br />
                질을 높이는 예약제 병원입니다.
              </MiddleCarouselLegend>
            </div>
            <div>
              <MiddleCarouselImage src="./test-background2.jpg" />
              <MiddleCarouselLegend title="고가의 영상장비">
                마리아 유외과는 검사의 <br /> 정확성을 높이기위해 <br />
                고가의 영상장비를 구비하고 있습니다.
              </MiddleCarouselLegend>
            </div>
            <div>
              <MiddleCarouselImage src="./test-background3.jpg" />
              <MiddleCarouselLegend title="예약에서 필요서류까지">
                마리아 유외과는 예약에서 <br />
                필요서류까지 빠짐없이 도와드립니다.
              </MiddleCarouselLegend>
            </div>
            <div>
              <MiddleCarouselImage src="./test-background4.jpg" />
              <MiddleCarouselLegend title="바늘 일회사용을 준수">
                마리아 유외과는 VABB 바늘
                <br />
                일회사용을 준수 하고 있습니다.
              </MiddleCarouselLegend>
            </div>
            <div>
              <MiddleCarouselImage src="./test-background5.jpg" />
              <MiddleCarouselLegend title="불안한 여성들의 마음">
                마리아 유외과는 불안한 <br />
                여성들의 마음을 잘 알고 있습니다.
              </MiddleCarouselLegend>
            </div>
            <div>
              <MiddleCarouselImage src="./test-background6.jpg" />
              <MiddleCarouselLegend title="원스톱 시스템">
                유방암, 갑상선암 검진의 <br />
                원스톱 시스템
              </MiddleCarouselLegend>
            </div>
          </Carousel>
        </MiddleCarouselImageWrapper>

        <MiddleCarouselContent>
          <h1>유방전문클리닉</h1>
          <h2>소중한 당신의 가슴을 더욱 건강하게 지켜드립니다.</h2>
          <p>
            유방 및 갑상선 정기 검진에서부터 암이 아닌 양성질환의 관리, 조기암의
            발견에 이르기까지 <br /> 모든 진료에서 여러분의 불안을 깨끗이 씻을
            수 있게 시원하고 명쾌한 해답을 드리는 병원
          </p>
          <Link href="#">
            <a>자세히 보기</a>
          </Link>
        </MiddleCarouselContent>
      </MiddleCarouselWrapper>
    </MiddleContainer>
  );
};

export default Middle;
