import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Profiles } from "../components";
import * as ROUTES from "../constants/routes";

interface ISelectProfileContainer {
  user: any;
  setProfile?: any;
}

const SelectProfileContainer: React.FC<ISelectProfileContainer> = ({
  user,
  setProfile,
}) => {
  const [imgURL, setImgURL] = useState("");

  useEffect(() => {
    setImgURL(
      user.photoURL
        ? `/images/users/${user.photoURL}.png`
        : `/images/misc/loading.gif`
    );
  }, [user.photoURL]);

  return (
    <>
      <div className="flex justify-between py-5 px-3 sm:px-7">
        <Link to={ROUTES.HOME} className="py-3 px-4">
          <img src={imgURL} alt="NETFLIX" className="w-24 md:w-28 lg:w-32" />
        </Link>
      </div>

      <Profiles>
        <div>
          <p>Who's watching?</p>
          <ul>
            <li>
              <img src={user.photoURL} alt="User profile" />
              <p>{user.displayName}</p>
            </li>
          </ul>
        </div>
      </Profiles>
    </>
  );
};

export default SelectProfileContainer;
