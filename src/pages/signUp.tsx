/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { Form } from "../components";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import * as ROUTES from "../constants/routes";

const SignUp = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid: boolean =
    firstName === "" || password === "" || emailAddress === "";

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              type="text"
              placeholder="First name"
              value={firstName}
              handleChange={(value) => setEmailAddress(value)}
            />

            <Form.Input
              type="text"
              placeholder="Email address"
              value={emailAddress}
              handleChange={(value) => setEmailAddress(value)}
            />

            <Form.Input
              type="password"
              placeholder="password"
              value={password}
              handleChange={(value) => setPassword(value)}
            />
            <Form.Submit disabled={isInvalid} type="submit" />
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to={ROUTES.SIGN_IN} value="Sign in." />
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you are not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignUp;
