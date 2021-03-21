import JumbotronContainer from "../containers/jumbotron";
import FooterContainer from "../containers/footer";
import FaqsContainer from "../containers/faqs";
import HeaderContainer from "../containers/header";

const Home = () => {
  return (
    <>
      <HeaderContainer />
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
