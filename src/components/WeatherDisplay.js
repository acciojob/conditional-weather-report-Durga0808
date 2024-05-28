// src/WeatherDisplay.js
import React from 'react';

const WeatherDisplay = ({ temperature, conditions }) => {
  const temperatureStyle = {
    color: temperature > 20 ? 'red' : 'blue'
  };

  return (
    <div>
      <h1>Weather Conditions</h1>
      <p style={temperatureStyle}>Temperature: {temperature}</p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
