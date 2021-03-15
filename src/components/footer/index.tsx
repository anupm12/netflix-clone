//footer
import React, { ReactNode } from "react";

interface Ifooter {
  children: ReactNode;
}

const Footer: React.FC<Ifooter> = ({ children }) => {
  return <>{children}</>;
};

export default Footer;
