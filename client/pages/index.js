import Hero from "../components/home/hero";
import Intro from "../components/home/intro";
import Feature from "../components/home/features";
import Map from "../components/home/map/index";
import Questions from "../components/home/questions";
import Footer from "../components/home/footer";
import Copyright from "../components/home/copyright";

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Feature />
      <Questions />
      <Map />
      <Footer />
      <Copyright />
    </>
  );
};

export default Home;
