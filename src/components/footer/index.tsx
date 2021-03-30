import React, { ReactNode } from "react";
import { Footerr } from "./styles/footer";

interface Ifooter {
  children: ReactNode;
}

const Footer: React.FC<Ifooter> = ({ children }) => {
  return <Footerr>{children}</Footerr>;
};

export default Footer;
