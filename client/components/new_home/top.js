import styled from "styled-components";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HomeContainer = styled.div`
  margin-top: 8rem;
`;

const HomeCarouselWrapper = styled.div`
  width: 100%;
  height: 60vh;

  @media all and (max-width: 1100px) and (min-width: 1050px) {
    height: 50vh;
  }

  @media all and (max-width: 1049px) and (min-width: 855px) {
    height: 45vh;
  }

  @media all and (max-width: 854px) {
    height: 40vh;
  }
`;

const HomeCarouselImage = styled.img`
  opacity: 0.8;

  @media all and (max-width: 765px) {
    min-height: 35vh;
  } ;
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

  @media all and (max-width: 1260px) and (min-width: 1035px) {
    font-size: 3.8rem;
  }

  @media all and (max-width: 1034px) and (min-width: 840px) {
    font-size: 3rem;

    &:before {
      top: -5rem;
      left: 11rem;
    }
  }

  @media all and (max-width: 839px) and (min-width: 765px) {
    font-size: 2.7rem;

    &:before {
      top: -5rem;
      left: 10rem;
    }
  }

  @media all and (max-width: 764px) and (min-width: 719px) {
    font-size: 2rem;
    width: 80%;

    &:before {
      width: 60%;
      top: -5rem;
      left: 12rem;
      font-size: 2.5rem;
    }
  }

  @media all and (max-width: 719px) and (min-width: 590px) {
    font-size: 2rem;
    width: 100%;

    &:before {
      width: 80%;
      top: -5rem;
      left: 6rem;
      font-size: 2.5rem;
    }
  }

  @media all and (max-width: 589px) {
    font-size: 2rem;
    width: 100%;

    &:before {
      width: 100%;
      top: -5rem;
      left: 0rem;
      font-size: 2.5rem;
    }
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
