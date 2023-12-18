import React from 'react';
import Place from './components/place.js';

function App() {
  return (
    <div className="App p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Things2do</h1>
      <div className="w-full md:w-1/2 mx-auto">
        <div className="w-full p-4 border border-gray-300 rounded mb-4">
          <h2 className="text-xl font-bold mb-2">Breakfast</h2>
          <Place />
        </div>
        <div className="w-full p-4 border border-gray-300 rounded mb-4">
          <h2 className="text-xl font-bold mb-2">Lunch</h2>
          <Place />
        </div>
        <div className="w-full p-4 border border-gray-300 rounded mb-4">
          <h2 className="text-xl font-bold mb-2">Activity</h2>
          <Place />
        </div>
        <div className="w-full p-4 border border-gray-300 rounded mb-4">
          <h2 className="text-xl font-bold mb-2">Snack</h2>
          <Place />
        </div>
        <div className="w-full p-4 border border-gray-300 rounded mb-4">
          <h2 className="text-xl font-bold mb-2">Dinner</h2>
          <Place />
        </div>
      </div>
    </div>
  );
}

export default App;
