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

  const isInvalid: Boolean =
    firstName === "" || password === "" || emailAddress === "";

  const handleSignIn = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <FooterContainer />
    </>
  );
};

export default SignUp;
