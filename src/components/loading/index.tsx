import React from "react";
import { LockBody, ReleaseBody, Spinner, Picture } from "./styles/loading";

interface ILoading {
  src?: string;
}

interface ILoadingType {
  ReleaseBody: React.FC<ILoading>;
}

const Loading: React.FC<ILoading> & ILoadingType = ({ src, ...restProps }) => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
    </Spinner>
  );
};

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};

export default Loading;
