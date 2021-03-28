/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/loading";
import { FirebaseContext } from "../context/firebase";
import SelectProfileContainer from "./profiles";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

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
    }, 4000);
  }, [profile.displayName]);

  return (
    <>
      {profile.displayName ? (
        loading ? (
          <Loading src={user.photoURL} />
        ) : (
          <>
            <Loading.ReleaseBody />
            {BrowseHeader()}
          </>
        )
      ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
      )}
    </>
  );
};

const BrowseHeader = (): JSX.Element => {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/images/misc/joker1.jpg')" }}
      >
        <div className="flex justify-between py-5 px-3 sm:px-7">
          <Link to={ROUTES.HOME} className="py-3 px-4">
            <img src={logo} alt="NETFLIX" className="w-24 md:w-28 lg:w-32" />
          </Link>
        </div>
        <div className="px-2 sm:px-5 pb-40 sm:pb-56 pt-24 flex flex-col">
          <p className="text-3xl sm:text-4xl font-bold px-5 py-1 w-full sm:w-1/2">
            Watch Joker Now
          </p>
          <p className="w-full sm:w-1/2 px-5 py-1 text-base font-normal sm:font-semibold">
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </p>
        </div>
      </div>
    </>
  );
};

export default BrowseContainer;
