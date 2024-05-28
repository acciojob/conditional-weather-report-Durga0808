
import React, { useState, useEffect } from 'react';
import './../styles/App.css';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: 'Unknown' });

  useEffect(() => {
    // Simulate fetching weather data
    const weatherInput = { temperature: 25, conditions: 'Sunny' };
    setWeather(weatherInput);
  }, []);


  return (
    <div>
        {/* Do not remove the main div */}
        <header className="App-header">
        <WeatherDisplay temperature={weather.temperature} conditions={weather.conditions} />
      </header>

    </div>
  )
}

export default App
