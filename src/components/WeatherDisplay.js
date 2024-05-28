// src/WeatherDisplay.js
import React from 'react';

const WeatherDisplay = ({ temperature, conditions }) => {
  const temperatureStyle = {
    color: temperature > 20 ? 'red' : 'blue'
  };

  return (
    <div>
      <h1>Weather Conditions</h1>
      <p><span style={temperatureStyle}>Temperature: {temperature}</span></p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
