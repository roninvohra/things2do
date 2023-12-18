import React, { useState } from 'react';

const Place = () => {
  const places = [
    {
      name: 'Cafe Sunshine',
      rating: '5 stars',
      location: 'New York',
      openTimes: '8:00 AM - 10:00 PM',
    },
    {
      name: 'Spicy Bites',
      rating: '4.5 stars',
      location: 'Paris',
      openTimes: '11:00 AM - 9:00 PM',
    },
  ];

  const getRandomPlace = () => {
    const randomIndex = Math.floor(Math.random() * places.length);
    return places[randomIndex];
  };

  const [currentPlace, setCurrentPlace] = useState(getRandomPlace);

  const changePlace = () => {
    setCurrentPlace(getRandomPlace());
  };

  return (
    <div className="flex justify-center items-center">
      <div className="p-4 border border-gray-300 rounded text-center m-4">
        <h2 className="text-xl font-bold mb-2">{currentPlace.name}</h2>
        <p className="text-gray-600">Rating: {currentPlace.rating}</p>
        <p className="text-gray-600">Location: {currentPlace.location}</p>
        <p className="text-gray-600">Open Times: {currentPlace.openTimes}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={changePlace}
        >
          Change Place
        </button>
      </div>
    </div>
  );
};

export default Place;
