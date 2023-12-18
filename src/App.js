import React from 'react';
import Place from './components/place.js';

function App() {
  return (
    <div className="App p-4 flex flex-col items-center bg-gray-100 min-h-screen"  style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Things2do</h1>
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
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
