import React from "react";
import jumboData from "../fixtures/jumbo.json";
import { Jumbotron } from "../components/jumbotron/index";

export const JumbotronContainer = () => {
  return (
    <div className="flex flex-col">
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <div className="flex w-full py-5 items-center justify-center border-b-2 border-gray-900">
            <div
              className={`flex sm:${item.direction} flex-col items-center justify-center md:w-3/5`}
            >
              <div className="w-full sm:w-1/2 text-center sm:text-left">
                <p className="text-3xl font-extrabold p-5">{item.title}</p>
                <p className="text-sm font-normal px-5">{item.subTitle}</p>
              </div>
              <div className="w-full sm:w-1/2 flex justify-center">
                <img className="h-full" src={item.image} alt={item.alt} />
              </div>
            </div>
          </div>
        </Jumbotron>
      ))}
    </div>
  );
};
