import React from "react";
import { Header } from "../components";
import logo from "../logo.svg";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

const HeaderContainer: React.FC = ({ children }) => {
  return (
    <Header>
      <div className="flex justify-between py-5 px-3 sm:px-7">
        <Link to={ROUTES.HOME} className="py-3 px-4">
          <img src={logo} alt="NETFLIX" className="w-24 md:w-28 lg:w-32" />
        </Link>
        <Link to={ROUTES.SIGN_IN} className="py-3 px-4">
          <button className="bg-red-600 rounded-sm h-7 md:h-10 w-20 text-center text-base font-medium">
            Sign In
          </button>
        </Link>
      </div>
      {children}
    </Header>
  );
};

export default HeaderContainer;
