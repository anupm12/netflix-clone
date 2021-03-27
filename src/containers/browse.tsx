import React, { useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import SelectProfileContainer from "./profiles";

interface IBrowse {
  slides: {
    series: {
      title: string;
      data: any;
    }[];
  };
}

const BrowseContainer: React.FC<IBrowse> = ({ slides }) => {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  return (
    <>
      <SelectProfileContainer user={user} />
    </>
  );
};

export default BrowseContainer;
