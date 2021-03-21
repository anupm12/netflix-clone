import { Header } from "../components";
import logo from "../logo.svg";
import * as ROUTES from "../constants/routes";

const HeaderContainer: React.FC = () => {
  return (
    <Header>
      <div className="flex justify-between py-5 px-7">
        <a href={ROUTES.HOME} className="py-3 px-4">
          <img src={logo} alt="NETFLIX" className="w-24 md:w-28 lg:w-32" />
        </a>
        <a href={ROUTES.SIGN_IN} className="py-3 px-4">
          <button className="bg-red-600 rounded-sm h-7 md:h-10 w-20 text-center text-base font-medium">
            Sign In
          </button>
        </a>
      </div>
    </Header>
  );
};

export default HeaderContainer;
