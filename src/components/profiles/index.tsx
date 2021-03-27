import { ReactNode } from "react";

interface IProfiles {
  children: ReactNode;
}

const Profiles: React.FC<IProfiles> = ({ children }) => {
  return <>{children}</>;
};

export default Profiles;
