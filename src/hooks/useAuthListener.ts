/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebase";

const useAuthListener = () => {
  let getUser = localStorage.getItem("authUser");
  if (getUser != null) {
    getUser = JSON.parse(getUser);
  }
  const [user, setUser] = useState<any>(getUser);

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listener();
  }, [firebase]);

  return { user };
};

export default useAuthListener;
