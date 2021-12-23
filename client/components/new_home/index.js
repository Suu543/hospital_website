import styled from "styled-components";
import Top from "./top";
import TopMiddle from "./top-middle";
import Middle from "./middle";
import MiddleBottom from "./middle-bottom";
import Bottom from "./bottom";
import BottomFooter from "./bottom-footer";
import Footer from "../../components/home/footer";

const HomeContainer = styled.div`
  margin-top: 8rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Top />
      <TopMiddle />
      <Middle />
      <MiddleBottom />
      <Bottom />
      <BottomFooter />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
