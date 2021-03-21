import React, { useState, useContext, createContext, ReactNode } from "react";

import {
  Container,
  Body,
  Header,
  Inner,
  Item,
  Title,
} from "./styles/accordion";

interface IToggleContext {
  toggleShow: boolean;
  setToggleShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleContext = createContext({} as IToggleContext);

interface IAccordion {
  children: ReactNode;
}

interface AccordionType {
  Title: React.FC<IAccordion>;
  Body: React.FC<IAccordion>;
  Header: React.FC<IAccordion>;
  Item: React.FC<IAccordion>;
}

const Accordion: React.FC<IAccordion> & AccordionType = ({
  children,
  ...restProps
}) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Accordion.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

export default Accordion;
