import styled from "styled-components";
import Link from "next/link";

const FooterContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  background-color: #fafafa;
`;

const FooterWrapper = styled.div`
  width: 70%;
  margin: auto;
`;

const FooterHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #3bb3d826;
`;

const FooterHeaderLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem 0;
  font-size: 1.5rem;
  flex: 2 1 45rem;
  font-family: "Noto Sans KR", sans-serif;
  margin: 2rem 0;
`;

const FooterHeaderLogos = styled.ul``;

const FooterBodyWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  min-height: 30vh;
  justify-content: space-around;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media all and (max-width: 898px) {
    gap: 4rem;
  }
`;

const FooterBodyLists = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1 1 20rem;
  align-items: center;
  justify-content: center;

  li {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 1.5rem;

    &:first-child {
      font-weight: bold;
    }
  }

  @media all and (max-width: 898px) {
    align-items: flex-start;
    flex: 1 1 50rem;
    /* background-color: gold; */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterHeaderWrapper>
          <FooterHeaderLists>
            <li>
              <Link href="/intro/introHospital">병원소개</Link>
            </li>
            <li>
              <Link href="/intro/introMedicalStaff">의료진소개</Link>
            </li>
            <li>
              <Link href="/intro/introFacility">병원 둘러보기</Link>
            </li>
            <li>
              <Link href="/intro/locations">찾아오시는 길</Link>
            </li>
          </FooterHeaderLists>
          <FooterHeaderLogos></FooterHeaderLogos>
        </FooterHeaderWrapper>
        <FooterBodyWrapper>
          <FooterBodyLists>
            <li>마리아유외과 소개</li>
            <li>
              <Link href="/intro/introHospital">병원소개</Link>
            </li>
            <li>
              <Link href="/intro/introMedicalStaff">의료진소개</Link>
            </li>
            <li>
              <Link href="/intro/introFacility">병원 둘러보기</Link>
            </li>
            <li>
              <Link href="/intro/locations">찾아오시는 길</Link>
            </li>
          </FooterBodyLists>
          <FooterBodyLists>
            <li>진료안내</li>
            <li>
              <Link href="/intro/introHospital">유방 클리닉</Link>
            </li>
            <li>
              <Link href="/intro/introMedicalStaff">VABB 클리닉</Link>
            </li>
            <li>
              <Link href="/intro/introFacility">갑상선 클리닉</Link>
            </li>
            <li>
              <Link href="/intro/locations">진료시간 안내</Link>
            </li>
          </FooterBodyLists>
          <FooterBodyLists>
            <li>마리아유외과 소식</li>
            <li>
              <Link href="/intro/introFacility">자주묻는질문</Link>
            </li>
            <li>
              <Link href="/intro/locations">공지사항</Link>
            </li>
          </FooterBodyLists>
        </FooterBodyWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
