import React, { ReactNode } from "react";
import { Redirect, Route } from "react-router-dom";

interface IUserRedirectType {
  user: null | {};
  loggedInPath?: string;
  children: ReactNode;
  path: string;
  exact: boolean;
}

export const IsUserRedirect: React.FC<IUserRedirectType> = ({
  user,
  loggedInPath,
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }
        return null;
      }}
    />
  );
};

export const ProtectedRoute: React.FC<IUserRedirectType> = ({
  user,
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: "signin",
                state: { from: location },
              }}
            />
          );
        }
        return null;
      }}
    />
  );
};
