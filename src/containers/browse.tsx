/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Loading, Player } from "../components/";
import { FirebaseContext } from "../context/firebase";
import SelectProfileContainer from "./profiles";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import styled, { StyledComponent } from "styled-components/macro";
import FooterContainer from "./footer";
import Fuse from "fuse.js";

interface IBrowse {
  slides: {
    [k: string]: {
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
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("series");
  const [slideRows, setSlideRows] = useState<{ title: string; data: any }[]>(
    []
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [profile.displayName]);

  useEffect(() => setSlideRows(slides[category]), [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);
    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [category, searchTerm, slides]);

  return (
    <>
      {profile.displayName ? (
        loading ? (
          <Loading src={user.photoURL} />
        ) : (
          <>
            <Loading.ReleaseBody />
            {BrowseHeader(
              user,
              firebase,
              searchTerm,
              setSearchTerm,
              category,
              setCategory,
              slideRows,
              setSlideRows
            )}
          </>
        )
      ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
      )}
    </>
  );
};

const BrowseHeader = (
  user: any,
  firebase: any,
  searchTerm: any,
  setSearchTerm: any,
  category: any,
  setCategory: any,
  slideRows: any,
  setSlideRows: any
): JSX.Element => {
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
            <p
              onClick={() => setCategory("series")}
              className="font-semibold text-base sm:text-xl px-2 sm:px-7 pt-4 cursor-pointer"
            >
              Series
            </p>
            <p
              onClick={() => setCategory("films")}
              className="font-semibold text-base sm:text-xl px-2 sm:px-7 pt-4 cursor-pointer"
            >
              Films
            </p>
          </div>
          <div className="flex items-center">
            <Search className="pt-3 flex">
              <input
                className="bg-transparent w-20"
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search"
              />
            </Search>

            <Dropdown>
              <div className="dropdown relative">
                <button className="font-semibold px-4 sm:px-7 items-center">
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
          <button className="w-1/6 mx-5 my-2 py-1 bg-gray-200 rounded text-black text-base font-bold hover:bg-red-600 transition-colors ">
            Play
          </button>
        </div>
      </div>

      <Card.Group>
        {slideRows.map((slideItem: any) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item: any) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>

      <FooterContainer />
    </>
  );
};

const Dropdown = styled.div`
  .dropdown:hover .dropdown-menu {
    display: block;
  }
`;

const Search = styled.div`
  input {
    ::-webkit-input-placeholder {
      /* Edge */
      color: #e7e7e7;
      font-weight: 700;
      font-size: large;
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #e7e7e7;
    }

    ::placeholder {
      color: #e7e7e7;
    }
  }
`;

export default BrowseContainer;
