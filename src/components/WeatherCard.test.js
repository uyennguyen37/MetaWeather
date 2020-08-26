import React from 'react';
import { render } from '@testing-library/react';
import Weather from './WeatherCard'

describe('WeatherCard Component', () => {
    describe('render', () => {
        let day = {
            applicable_date: '2020-08-25',
            weather_state_abbr: 'hc',
            the_temp: 27,
            min_temp: 15,
            max_temp: 30,
            weather_state_name: 'Heavy Cloud'
        }

        it('should return container', () => {
            const { container } = render (
                <WeatherCard day={day}/>
            );
            expect(container).toBeDefined();
        });

        it('should display a correct date', () => {
            const { getByTestId } = render (
                <WeatherCard day={day}/>
            );
            const forecastDate = getByTestId('forecast-date');
            expect(forecastDate).toHaveTextContent('Tuesday, August 25th 2020');
        });

        it('should display a correct weather image', () => {
            const { getByTestId } = render (
                <WeatherCard day={day}/>
            );
            const forecastImg = getByTestId('forecast-img');
            expect(forecastImg.src).toBe('https://www.metaweather.com/static/img/weather/png/64/hc.png');
        });

        it('should display correct temperatures', () => {
            const { getByTestId } = render (
                <WeatherCard day={day}/>
            );
            const forecastTemp = getByTestId('forecast-temp');
            expect(forecastTemp).toHaveTextContent(27);

            const forecastMinTemp = getByTestId('forecast-min-temp');
            expect(forecastMinTemp).toHaveTextContent(15);

            const forecastMaxTemp = getByTestId('forecast-max-temp');
            expect(forecastMaxTemp).toHaveTextContent(30);
        });

        it('should display a correct weather state name', () => {
            const { getByTestId } = render (
                <WeatherCard day={day}/>
            );
            const forecastState = getByTestId('forecast-state');
            expect(forecastState).toHaveTextContent('Heavy Cloud');
        });
    });
});
