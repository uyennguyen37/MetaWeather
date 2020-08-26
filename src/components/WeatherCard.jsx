import React from 'react';
import moment from 'moment';

import './WeatherCard.css'

function formatDate(date) {
  return moment(new Date(date)).format('dddd, MMMM Do YYYY');
}

function minmaxTemp(min, max) {
  if (min && max) {
    return (
      <h3>
        <span data-testid="forecast-min-temp" className="px-4">
          {min}&deg;
        </span>
        <span data-testid="forecast-max-temp" className="px-4">
          {max}&deg;
        </span>
      </h3>
    );
  }
}

function calculateTemp(temp) {
  return Math.floor(temp);
}

const WeatherCard = ({ day }) => {
  if (!day) return null;

  return (
    <div className="weather-card">
      <h3 data-testid="forecast-date">
        {' '}
        {formatDate(day.applicable_date)}{' '}
      </h3>
      <h5 className="py-4">
        <div>
          <img
            data-testid="forecast-img"
            src={`https://www.metaweather.com/static/img/weather/png/64/${day.weather_state_abbr}.png`}
            alt="weather"
          />
        </div>
      </h5>

      {day.the_temp ? (
        <h1 data-testid="forecast-temp" className="py-2">
          {calculateTemp(day.the_temp)}&deg;
        </h1>
      ) : null}

      {minmaxTemp(
        calculateTemp(day.min_temp),
        calculateTemp(day.max_temp)
      )}

      <h4 data-testid="forecast-state" className="py-3">
        {day.weather_state_name}
      </h4>
    </div>
  );
};

 export default WeatherCard;