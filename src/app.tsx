import React from "react";
import jumboData from "./fixtures/jumbo.json";
import { Jumbotron } from "./components/jumbotron/index";

function App() {
  return (
    <div className="flex flex-col">
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <div className="flex w-full py-5 items-center justify-center border-b-2 border-gray-900">
            <div
              className={`flex ${item.direction} items-center justify-between md:w-3/5`}
            >
              <div className="w-1/2">
                <p className="text-3xl font-bold p-5">{item.title}</p>
                <p className="text-lg px-5">{item.subTitle}</p>
              </div>
              <div className="w-1/2">
                <img className="h-full" src={item.image} alt={item.alt} />
              </div>
            </div>
          </div>
        </Jumbotron>
      ))}
    </div>
  );
}

export default App;
