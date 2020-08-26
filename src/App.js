import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from 'antd';
import { getWeatherForecasts } from './actions/weatherActions';

import './App.css';
import WeatherList from './components/WeatherList';
import SearchBox from './components/SearchBox';

const { Title } = Typography;

const App = () => {
  const weatherForecasts = useSelector((state) => state.weatherReducer);
  const { weatherData, fetching, location } = weatherForecasts;
  
  const dispatch = useDispatch();

  const handleSelectCity = (woeid) => {
       dispatch(getWeatherForecasts(woeid));
  };
     
  return (
    <div className="App">
      <SearchBox onSelectCity={handleSelectCity} />
      {fetching ? (
        <Title level={4} data-testid="forecast-loading"> Loading weather... </Title>
      ) : (
        <>
          <Title level={1}>{location}</Title> 
          <WeatherList items={weatherData} />
        </>
      )}
    </div>
  );
}

export default App;
