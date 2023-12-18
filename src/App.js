import React, { useState } from 'react';
import Place from './components/place.js';

function App() {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState(2); // Default value, you can adjust as needed

  const handlePriceChange = (e) => {
    setPriceRange(parseInt(e.target.value, 10));
  };

  const getPriceRepresentation = () => {
    switch (priceRange) {
      case 1:
        return '$';
      case 2:
        return '$$';
      case 3:
        return '$$$';
      case 4:
        return '$$$$';
      default:
        return '';
    }
  };

  return (
    <div className="App p-4 flex flex-col items-center bg-gray-100 min-h-screen" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Things2do</h1>
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
        {/* Enter Location Field */}
        <div className="mb-4">
          <label className="text-gray-700">Enter Location:</label>
          <input
            type="text"
            className="block w-full p-2 border rounded-md"
            placeholder="E.g., City, Country"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        {/* Price Range Selector */}
        <div className="mb-8">
          <label className="text-gray-700">Price Range:</label>
          <input
            type="range"
            min="1"
            max="4"
            step="1"
            value={priceRange}
            onChange={handlePriceChange}
            className="w-full"
          />
          <div className="text-center mt-2">{getPriceRepresentation()}</div>
        </div>
        {/* Boxes */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Breakfast</h2>
          <Place />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Lunch</h2>
          <Place />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Activity</h2>
          <Place />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Snack</h2>
          <Place />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Dinner</h2>
          <Place />
        </div>
      </div>
    </div>
  );
}

export default App;
