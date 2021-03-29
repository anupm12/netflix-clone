/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../components/";
import { FirebaseContext } from "../context/firebase";
import SelectProfileContainer from "./profiles";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import styled, { StyledComponent } from "styled-components/macro";

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
            {BrowseHeader(user, firebase)}
          </>
        )
      ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
      )}
    </>
  );
};

const BrowseHeader = (user: any, firebase: any): JSX.Element => {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/images/misc/joker1.jpg')" }}
      >
        <div className="flex justify-between py-5 px-3 sm:px-7">
          <div className="flex">
            <Link to={ROUTES.HOME} className="py-3 px-4">
              <img src={logo} alt="NETFLIX" className="w-24 md:w-28 lg:w-32" />
            </Link>
            <Link
              to={""}
              className="font-semibold text-base sm:text-xl px-2 sm:px-7 pt-4 "
            >
              Series
            </Link>
            <Link
              to={""}
              className="font-semibold text-base sm:text-xl px-2 sm:px-7 pt-4 "
            >
              Films
            </Link>
          </div>
          <Dropdown>
            <div className="dropdown inline-block relative">
              <button className="font-semibold pt-3 px-4 sm:px-7 inline-flex items-center">
                <img
                  className="w-6 sm:w-10 pt-1 sm:pt-2"
                  src={`/images/users/${user.photoURL}.png`}
                  alt="User profile"
                />
              </button>
              <ul className="dropdown-menu absolute hidden">
                <li>
                  <a className="bg-black py-2 px-2 sm:px-4 block" href="/">
                    {user.displayName}
                  </a>
                </li>
                <li>
                  <a
                    className="bg-black py-2 px-2 sm:px-4 block"
                    href="/"
                    onClick={() => firebase.auth().signOut()}
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </Dropdown>
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

const Dropdown = styled.div`
  .dropdown:hover .dropdown-menu {
    display: block;
  }
`;

export default BrowseContainer;
