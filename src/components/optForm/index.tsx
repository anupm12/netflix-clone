import { ReactNode } from "react";

interface IoptForm {
  children: ReactNode;
}

const OptForm: React.FC<IoptForm> = ({ children }) => {
  return <>{children}</>;
};

export default OptForm;
