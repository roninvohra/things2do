// Place.js

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
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>{currentPlace.name}</h2>
        <p>Rating: {currentPlace.rating}</p>
        <p>Location: {currentPlace.location}</p>
        <p>Open Times: {currentPlace.openTimes}</p>
        <button onClick={changePlace}>Change Place</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    margin: '10px',
  },
};

export default Place;
