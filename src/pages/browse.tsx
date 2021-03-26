/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { useContent } from "../hooks";
import { selectionFilter } from "../utils";

const Browse = () => {
  const series = useContent("series");
  const films = useContent("films");
  const slides = selectionFilter(series, films);

  return (
    <>
      <p>Browse!!</p>
    </>
  );
};

export default Browse;
