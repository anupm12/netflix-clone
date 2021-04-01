import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "../components";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import * as ROUTES from "../constants/routes";

const SignUpBuild = () => {
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState("");

  const isInvalid: boolean =
    firstName === "" || password === "" || emailAddress === "";

  const handleSignUp = () => {};

  return (
    <>
      <HeaderContainer>
        <Form>
          <p className="p-3 my-4 border border-red-600 rounded-lg text-lg">
            I've disabled Sign Up for obvious reasons. Meanwhile you can Sign In
            using credentials provided on the{" "}
            <Link to={ROUTES.SIGN_IN} className="text-red-600">
              Sign In
            </Link>{" "}
            page.
          </p>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              type="text"
              placeholder="First name"
              value={firstName}
              handleChange={(value) => setFirstName(value)}
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
            <Form.Submit disabled={isInvalid} type="submit" value="Sign Up" />
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

export default SignUpBuild;
