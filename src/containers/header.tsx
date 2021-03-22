import { Header } from "../components";
import logo from "../logo.svg";
import * as ROUTES from "../constants/routes";
import OptFormContainer from "../containers/optForm";

const HeaderContainer: React.FC = () => {
  return (
    <Header>
      <div className="flex justify-between py-5 px-3 sm:px-7">
        <a href={ROUTES.HOME} className="py-3 px-4">
          <img src={logo} alt="NETFLIX" className="w-24 md:w-28 lg:w-32" />
        </a>
        <a href={ROUTES.SIGN_IN} className="py-3 px-4">
          <button className="bg-red-600 rounded-sm h-7 md:h-10 w-20 text-center text-base font-medium">
            Sign In
          </button>
        </a>
      </div>

      <div className="flex flex-col items-center py-10 sm:pt-20 sm:pb-44 w-full border-b-8 border-gray-800">
        <div className="w-4/5 sm:w-2/3 text-center">
          <p className="pt-3 text-3xl sm:text-5xl font-bold">
            Unlimited movies, TV
          </p>
        </div>

        <div className="w-4/5 sm:w-2/3 text-center">
          <p className="pb-3 text-3xl sm:text-5xl font-bold">shows and more.</p>
        </div>

        <div className="w-4/5 sm:w-2/3 text-center">
          <p className="py-2 sm:py-3 text-lg sm:text-2xl font-medium sm:font-normal">
            Watch anywhere. Cancel anytime.
          </p>
        </div>
        <div className="w-4/5  sm:w-1/2 text-center">
          <p className="py-1 sm:py-3 text-lg sm:text-xl font-medium sm:font-normal">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <div className="w-4/5 sm:w-1/2">
          <OptFormContainer />
        </div>
      </div>
    </Header>
  );
};

export default HeaderContainer;
