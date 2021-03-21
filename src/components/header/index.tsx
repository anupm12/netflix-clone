import React, { ReactNode } from "react";
import { Background } from "./styles/header";

interface IHeader {
  children: ReactNode;
}

const Header: React.FC<IHeader> = ({ children }) => {
  return <Background>{children}</Background>;
};

export default Header;
