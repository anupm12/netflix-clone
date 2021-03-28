import { Link } from "react-router-dom";
import { Profiles } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

interface ISelectProfileContainer {
  user: any;
  setProfile: React.Dispatch<
    React.SetStateAction<{
      displayName: string;
      photoURL: string;
    }>
  >;
}

const SelectProfileContainer: React.FC<ISelectProfileContainer> = ({
  user,
  setProfile,
}) => {
  return (
    <>
      <div className="flex justify-between py-5 px-3 sm:px-7">
        <Link to={ROUTES.HOME} className="py-3 px-4">
          <img src={logo} alt="NETFLIX" className="w-24 md:w-28 lg:w-32" />
        </Link>
      </div>

      <Profiles>
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold p-3">Who's watching?</p>
          <ul className="">
            <li
              className="flex flex-col items-center p-2 group transform hover:scale-105 transition-transform"
              onClick={() =>
                setProfile({
                  displayName: user.displayName,
                  photoURL: user.photoURL,
                })
              }
            >
              <img
                className="w-28"
                src={
                  user.photoURL
                    ? `/images/users/${user.photoURL}.png`
                    : `/images/misc/loading.gif`
                }
                alt="User profile"
              />
              <p className="font-medium text-gray-500 p-2 group-hover:text-gray-50">
                {user.displayName}
              </p>
            </li>
          </ul>
        </div>
      </Profiles>
    </>
  );
};

export default SelectProfileContainer;
