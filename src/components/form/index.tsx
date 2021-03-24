import { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Error,
  Base,
  Title,
  Text,
  TextSmall,
  Href,
  Input,
  Submit,
} from "./styles/form";

interface IForm {
  children: ReactNode;
}

interface FormType {
  Base: React.FC<{
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    method: "POST";
  }>;
  Error: React.FC<IForm>;
  Title: React.FC<IForm>;
  Text: React.FC<IForm>;
  TextSmall: React.FC<IForm>;
  Link: React.FC<{
    to: string;
    value: string;
  }>;
  Input: React.FC<{
    type: string;
    placeholder: string;
    value: string;
    handleChange: (value: React.SetStateAction<string>) => void;
  }>;
  Submit: React.FC<{
    disabled: boolean;
    type: "submit";
  }>;
}

const Form: React.FC<IForm> & FormType = ({ children }) => {
  return <Container>{children}</Container>;
};

Form.Base = function FormBase({ children, onSubmit, method }) {
  return (
    <Base onSubmit={(event) => onSubmit(event)} method={method}>
      {children}
    </Base>
  );
};

Form.Error = function FormError({ children, ...restProps }) {
  return <Error>{children}</Error>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall>{children}</TextSmall>;
};

Form.Link = function FormLink({ to, value }) {
  return (
    <Href>
      <Link to={to}>{value}</Link>
    </Href>
  );
};

Form.Input = function FormInput({ value, type, placeholder, handleChange }) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={({ target }) => handleChange(target.value)}
    />
  );
};

Form.Submit = function FormSubmit({ disabled, type }) {
  return (
    <Submit disabled={disabled} type={type}>
      Sign In
    </Submit>
  );
};

export default Form;
