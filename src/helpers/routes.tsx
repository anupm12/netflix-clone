import React, { ReactNode } from "react";
import { Redirect, Route } from "react-router-dom";

interface IIsUserRedirect {
  user: any;
  loggedInPath: string;
  children: ReactNode;
  path?: string;
  exact?: boolean;
}

export const IsUserRedirect: React.FC<IIsUserRedirect> = ({
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

interface IProtectedRoute {
  user: any;
  path: string;
  exact: boolean;
  children: ReactNode;
}

export const ProtectedRoute: React.FC<IProtectedRoute> = ({
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
