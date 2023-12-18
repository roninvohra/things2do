import React, { useState } from 'react';

const Place = () => {
  const restaurantNames = ['Cafe Sunshine', 'Spicy Bites', 'Taste of Italy', 'Sushi Haven', 'Grill Master'];
  const cities = ['New York', 'Paris', 'Tokyo', 'London', 'Sydney'];
  const ratings = ['5 stars', '4.5 stars', '4 stars', '3.5 stars', '3 stars'];

  const getRandomElement = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const [currentRestaurant, setCurrentRestaurant] = useState({
    name: getRandomElement(restaurantNames),
    city: getRandomElement(cities),
    rating: getRandomElement(ratings),
  });

  const changeRestaurant = () => {
    setCurrentRestaurant({
      name: getRandomElement(restaurantNames),
      city: getRandomElement(cities),
      rating: getRandomElement(ratings),
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>{currentRestaurant.name}</h2>
        <p>City: {currentRestaurant.city}</p>
        <p>Rating: {currentRestaurant.rating}</p>
        <button onClick={changeRestaurant}>Change Restaurant</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  box: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
  },
};

export default Place;
