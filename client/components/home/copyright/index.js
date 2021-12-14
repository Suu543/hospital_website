import styled from "styled-components";

const CopyrightContainer = styled.div`
  width: 100%;
  height: 15vh;
`;

const CopyrightWrapper = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 1rem;

  li {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 1.5rem;
    color: #7c7c7c;
  }
`;

const Copyright = () => {
  return (
    <CopyrightContainer>
      <CopyrightWrapper>
        <li>마리아유외과 by Cozy's Blank. All Rights Reserved.</li>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
      </CopyrightWrapper>
    </CopyrightContainer>
  );
};

export default Copyright;
