import styled from "styled-components";
import Link from "next/link";

const HeroSection = styled.section`
  margin-top: 8rem;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      to top,
      rgba(38, 38, 38, 0.7),
      rgba(38, 38, 38, 0.8)
    ),
    url(https://images.pexels.com/photos/7659688/pexels-photo-7659688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
      center no-repeat;
  background-size: cover;

  @media all and (max-width: 1049px) {
    height: 60vh;
  }
`;

const HeroWrapper = styled.div`
  width: 65%;
  height: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;

  h5,
  h2,
  p {
    color: white;
    font-family: "Playfair Display", serif;
  }

  h5 {
    font-size: 6rem;
    padding: 4rem 0;
  }

  h2 {
    font-size: 4rem;
  }

  p {
    font-size: 2rem;
    font-family: "Source Sans Pro", sans-serif;
  }

  button {
    outline: none;
    color: white;
    border: none;
    font-size: 2rem;
    font-weight: bolder;
    width: 20%;
    padding: 15px 30px;
    font-family: "Playfair Display", serif;
    background-color: #a66d3f;
    margin-top: 5rem;
    transition: all 0.4s ease-in-out;
  }

  button:hover {
    background-color: white;
    color: #a66d3f;
  }

  @media all and (max-width: 1550px) and (min-width: 1250px) {
    width: 85%;
  }

  @media all and (max-width: 1249px) and (min-width: 1050px) {
    width: 90%;

    button {
      width: 25%;
    }
  }

  @media all and (max-width: 1049px) and (min-width: 681px) {
    width: 95%;

    button {
      width: 20%;
      padding: 15px 20px;
    }

    h5 {
      font-size: 3rem;
    }

    p {
      font-size: 1.6rem;
    }
  }

  @media all and (max-width: 680px) and (min-width: 431px) {
    width: 95%;

    button {
      width: 25%;
      padding: 10px 15px;
      font-size: 1.8rem;
    }

    h5 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.3rem;
    }
  }

  @media all and (max-width: 430px) {
    width: 95%;
    justify-content: center;
    align-items: center;

    button {
      width: 35%;
      padding: 10px 15px;
      font-size: 1.8rem;
    }

    h5 {
      width: 80%;
      margin: auto;
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 0.5rem;
      margin-top: 4rem;
    }

    p {
      width: 90%;
      margin: auto;
      margin-top: 1rem;
      margin-bottom: 2rem;
      font-size: 1.3rem;
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroWrapper>
        <h5>
          소중한 당신의 가슴을 <br />
          더욱 건강하게 지켜드립니다
        </h5>
        <p>
          유방 갑상선의 정기 검진에서부터 암이 아닌 양성질환의 관리, 조기암의
          발견에 이르기까지 모든 진료에서 여러분의 불안을 깨끗이 씻을 수 있게
          시원하고 명쾌한 해답을 드리는 병원
        </p>
        <Link href="/intro/introHospital">
          <button>둘러보기</button>
        </Link>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
