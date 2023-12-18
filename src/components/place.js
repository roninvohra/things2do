import React, { useState } from 'react';
import cafe from '../images/cafe.jpeg';

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={`text-yellow-500 ${index < rating ? 'fill-current' : 'fill-none'} text-xl`}>
      ★
    </span>
  ));

  return <div className="flex">{stars}</div>;
};

const Place = () => {
  const places = [
    {
      name: 'Cafe Sunshine',
      rating: 5,
      location: 'New York',
      openTimes: '8:00 AM - 10:00 PM',
      cuisine: 'Coffee Shop',
      atmosphere: 'Cozy',
      priceRange: '$$',
      featuredDish: 'Avocado Toast',
    },
    {
      name: 'Spicy Bites',
      rating: 4.5,
      location: 'Paris',
      openTimes: '11:00 AM - 9:00 PM',
      cuisine: 'Indian',
      atmosphere: 'Vibrant',
      priceRange: '$$$',
      featuredDish: 'Chicken Curry',
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
    <div className="flex items-center bg-white p-6 rounded-lg shadow-md transition">
      <img
        src={cafe} // Replace with actual image URL
        alt={currentPlace.name}
        className="w-20 h-20 object-cover rounded-full mr-4"
      />
      <div>
        <h2 className="text-2xl font-bold mb-2 text-blue-600">{currentPlace.name}</h2>
        <StarRating rating={currentPlace.rating} />
        {/* Additional Information */}
        <p className="text-gray-600 mt-2">Location: {currentPlace.location}</p>
        <p className="text-gray-600">Open Times: {currentPlace.openTimes}</p>
        <p className="text-gray-600">Cuisine: {currentPlace.cuisine}</p>
        <p className="text-gray-600">Atmosphere: {currentPlace.atmosphere}</p>
        <p className="text-gray-600">Price Range: {currentPlace.priceRange}</p>
        <p className="text-gray-600">Featured Dish: {currentPlace.featuredDish}</p>
        {/* Change Place Button */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition"
          onClick={changePlace}
        >
          Change Place
        </button>
      </div>
    </div>
  );
};

export default Place;