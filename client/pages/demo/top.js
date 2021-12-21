import styled from "styled-components";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HomeContainer = styled.div`
  margin-top: 8rem;
`;

const HomeCarouselWrapper = styled.div`
  width: 100%;
  height: 60vh;
`;

const HomeCarouselImage = styled.img`
  opacity: 0.8;
`;

const HomeCarouselLegend = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 4.5rem;
  color: white;
  font-weight: bold;
  padding: 0 2rem;
  font-family: "Noto Sans KR", sans-serif;
  padding-top: 2rem;

  &:before {
    content: "마리아유외과";
    position: absolute;
    top: -5rem;
    left: 15rem;
    width: 50%;
    height: 1rem;
    font-size: 2.5rem;
    margin: auto;
    border-top: 2px solid white;
    padding-top: 1rem;
  }
`;

const Top = () => {
  return (
    <HomeContainer>
      <HomeCarouselWrapper>
        <Carousel
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          dynamicHeight={true}
          status={true}
          showThumbs={false}
          stopOnHover={true}
          autoFocus={true}
          showStatus={false}
        >
          <div>
            <HomeCarouselImage src="./background1.jpg" />
            <HomeCarouselLegend>
              언제나 믿고 찾을 수 있는 <br />
              따뜻하고 친절한 마리아유외과
            </HomeCarouselLegend>
          </div>
          <div>
            <HomeCarouselImage src="./background2.jpg" />
            <HomeCarouselLegend>
              언제나 믿고 찾을 수 있는 <br />
              따뜻하고 친절한 마리아유외과
            </HomeCarouselLegend>
          </div>
          <div>
            <HomeCarouselImage src="./background3.jpg" />
            <HomeCarouselLegend>
              언제나 믿고 찾을 수 있는 <br />
              따뜻하고 친절한 마리아유외과
            </HomeCarouselLegend>
          </div>
        </Carousel>
      </HomeCarouselWrapper>
    </HomeContainer>
  );
};

export default Top;
