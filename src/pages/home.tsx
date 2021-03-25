import JumbotronContainer from "../containers/jumbotron";
import FooterContainer from "../containers/footer";
import FaqsContainer from "../containers/faqs";
import HeaderContainer from "../containers/header";
import { Feature } from "../components";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature />
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
