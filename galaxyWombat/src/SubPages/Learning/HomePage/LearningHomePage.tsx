import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PlanetsCategory, plantesCategory } from '../PlanetsCategory'; // Adjust the path as needed

const LearningHomePage = () => {
  // State to track the currently selected planet
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetsCategory>(
    plantesCategory[2]
  ); // Default to Earth

  return (
    <div className="h-screen" style={{ background: 'url(/img/bg.png)' }}>
      <div className="flex flex-row items-center justify-between mx-2">
        <button className="flex items-center px-4 py-2 mt-2 text-white rounded-lg opacity-70 hover:opacity-100">
          <Link to="/" className="flex items-center">
            <FaArrowLeft className="mr-2" />
            Back
          </Link>
        </button>
        <img
          src="/assets/icon.png"
          alt="Ikona"
          draggable="false"
          className="w-24 h-24 mt-2 select-none"
        />
      </div>
      <div className="flex flex-row items-center justify-center h-4/6  mx-2 ">
        <div className="flex flex-row w-3/5 h-2/3 bg-gray-800 bg-opacity-55 shadow-xl backdrop-blur-[2px] backdrop-filter rounded-lg p-4">
          <div className="w-1/2  flex items-center justify-center">
            <img
              src={selectedPlanet.image}
              alt={selectedPlanet.label}
              className="w-64 h-64 object-contain"
            />
          </div>
          <div className="w-1/2  flex flex-col items-center justify-center text-2xl">
            <p className="text-3xl bold m-2 text-white">
              Learn something about {selectedPlanet.label}
            </p>
            <button className="bg-green-600 py-2 px-4 rounded-lg mt-2 text-white hover:bg-white hover:text-green-600">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center mx-2 ">
        {/* Content menu with planet images and labels */}
        <div className="flex flex-row space-x-5">
          {plantesCategory.map((planet) => (
            <button
              key={planet.label}
              onClick={() => setSelectedPlanet(planet)} // Update selected planet on click
              className="flex flex-row items-center space-x-2 py-1 px-2  hover:bg-white bg-gray-800 bg-opacity-55 shadow-xl backdrop-blur-[2px] backdrop-filter rounded-lg p-4  hover:text-[#202937]"
            >
              <img
                src={planet.image}
                alt={planet.label}
                className="w-8 h-8 object-contain"
              />
              <span className="">{planet.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningHomePage;
