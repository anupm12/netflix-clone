/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { useContent } from "../hooks";

const Browse = () => {
  const series = useContent("series");
  const films = useContent("films");

  return (
    <>
      <p>Browse!!</p>
    </>
  );
};

export default Browse;
