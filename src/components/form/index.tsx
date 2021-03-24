import { ReactNode } from "react";
import {
  Container,
  Error,
  Base,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from "./styles/form";

interface IForm {
  children: ReactNode;
}

interface FormType {
  Base: React.FC<{
    onSubmit: (event: React.ChangeEvent<HTMLInputElement>) => void;
    method: string;
  }>;
  Error: React.FC<IForm>;
  Title: React.FC<IForm>;
  Text: React.FC<IForm>;
  TextSmall: React.FC<IForm>;
  Link: React.FC<{
    to: String;
  }>;
  Input: React.FC<{
    type: String;
    placeholder: String;
    value: String;
    onChange: (value: React.SetStateAction<string>) => void;
    autoComplete?: String;
  }>;
  Submit: React.FC<{
    disabled: Boolean;
    type: String;
  }>;
}

const Form: React.FC<IForm> & FormType = ({ children, ...restProps }) => {
  return <Container>{children}</Container>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base>{children}</Base>;
};

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link>{children}</Link>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit>{children}</Submit>;
};

export default Form;
