//jumbotron
import React, { ReactNode } from "react";
// import { Inner } from "./styles/jumbotron";

interface Ijumbo {
  direction: string;
  children: ReactNode;
}

export const Jumbotron: React.FC<Ijumbo> = ({
  children,
  direction = "row",
}) => {
  // return <Inner direction={direction}>{children}</Inner>;
  return <>{children}</>;
};
