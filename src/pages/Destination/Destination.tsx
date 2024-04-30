import { Navbar } from "../../components/Navbar/Navbar";
import { destinationNames } from "../../utils/destinationNames";
import { destinationCardInfo } from "../../utils//destinationCardInfo";
import { useState } from "react";

export const Destination = () => {
  const [selectedDestination, setSelectedDestination] =
    useState<string>("MOON");

  const currentDestination = (name: string) => {
    setSelectedDestination(name);
  };

  return (
    <>
      <section className="w-[1200px] bg-destinationDesktop text-white h-[100vh]">
        <Navbar />
        <div className="mt-20 ml-20 text-[24px]">
          <h1>01 PICK YOUR DESTINATION</h1>
        </div>
        <div className="mt-20">
          {destinationCardInfo.map((destination) => (
            <div
              key={destination.name}
              className={`${
                selectedDestination !== destination.name ? "hidden" : "block"
              } flex justify-around `}
            >
              <div>
                <img src={destination.image} alt={destination.name} />
              </div>
              <div className="w-[500px]">
                <div>
                  <ul className="flex">
                    {destinationNames.map((name) => (
                      <li
                        key={name}
                        className={`cursor-pointer m-3 ${
                          selectedDestination === name
                            ? "underline underline-offset-8"
                            : ""
                        }`}
                        onClick={() => currentDestination(name)}
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-[70px]">{destination.name}</h2>
                  <p>{destination.description}</p>
                  <hr />
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-[12px]">AVG DISTANCE</h3>
                      <p className="text-[24px]">{destination.avgDestance}</p>
                    </div>
                    <div>
                      <h3 className="text-[12px]">EST TRAVEL TIME</h3>
                      <p className="text-[24px]">{destination.estTravelTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
