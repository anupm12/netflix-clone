import React from "react";
import jumboData from "../fixtures/jumbo.json";
import { Jumbotron } from "../components/index";

const JumbotronContainer = () => {
  return (
    <div className="flex flex-col">
      {jumboData.map((item) => (
        <Jumbotron key={item.id}>
          <div className="flex w-full py-5 items-center justify-center border-b-8 border-gray-800">
            <div
              className={`flex md:${item.direction} flex-col items-center justify-center lg:w-9/12`}
            >
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold p-5">
                  {item.title}
                </p>
                <p className="text-base sm:text-lg lg:text-2xl font-normal px-5">
                  {item.subTitle}
                </p>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <img className="h-full" src={item.image} alt={item.alt} />
              </div>
            </div>
          </div>
        </Jumbotron>
      ))}
    </div>
  );
};

export default JumbotronContainer;
