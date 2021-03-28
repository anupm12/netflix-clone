import React, { useContext, useEffect, useState } from "react";
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
  const user: any = firebase.auth().currentUser || {};
  const [profile, setProfile] = useState<{
    displayName: string;
    photoURL: string;
  }>({ displayName: "", photoURL: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return (
    <>
      <SelectProfileContainer user={user} setProfile={setProfile} />
    </>
  );
};

export default BrowseContainer;
