/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { Form } from "../components";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import * as ROUTES from "../constants/routes";

const SignIn = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid: boolean = password === "" || emailAddress === "";

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hhh");
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method="POST">
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
            New to Netflix?{" "}
            <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
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

export default SignIn;
