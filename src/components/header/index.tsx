import React, { ReactNode } from "react";

interface IHeader {
  children: ReactNode;
}

const Header: React.FC<IHeader> = ({ children }) => {
  return <> {children} </>;
};

export default Header;
