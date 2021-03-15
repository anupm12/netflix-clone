//jumbotron
import React, { ReactNode } from "react";

interface Ijumbo {
  children: ReactNode;
}

const Jumbotron: React.FC<Ijumbo> = ({ children }) => {
  return <>{children}</>;
};

export default Jumbotron;
