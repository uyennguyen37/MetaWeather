import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherForecasts } from './actions/weatherActions';

import './App.css';
import Weather from './components/Weather';
import Form from './components/Form';

const App = () => {
  const weatherForecasts = useSelector(state => state.weatherForecasts);
  const { location, forecastDays, error, isLoading } = weatherForecasts;
  const dispatch = useDispatch();

  const getWeather = async (e) => {
    e.preventDefault();
    dispatch(getWeatherForecasts(e.target.elements.city.value));
  }

  return (
    <div className="App">
      <Form loadWeather={getWeather} error={error}/>
      { isLoading && <h5 data-testid="forecast-loading"> Loading weather... </h5> }
      { !isLoading && 
        <div>
          <h1>{location}</h1> 
          {forecastDays && forecastDays.map((day, idx) => {
            return(<Weather day={day} key={idx}/>);
          })}
        </div>}
  </div>
  );
}

export default App;
