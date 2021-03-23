import { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
}

const Form: React.FC<FormProps> = ({ children }) => {
  return <>{children}</>;
};

export default Form;
