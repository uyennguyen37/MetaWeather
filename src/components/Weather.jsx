import React from 'react';
import moment from 'moment';

const Weather = (props) => {
    if (!props.day) return null;
    return (
        <div className="container">
            <div className="cards pt-4">
                <h3 data-testid="forecast-date"> {formatDate(props.day.applicable_date)} </h3>
                <h5 className="py-4">
                    <div>
                    <img data-testid="forecast-img" src={`https://www.metaweather.com/static/img/weather/png/64/${props.day.weather_state_abbr}.png`} alt='weather'/>
                    </div>
                </h5>

                {props.day.the_temp ? (
                    <h1 data-testid="forecast-temp" className="py-2">{calculateTemp(props.day.the_temp)}&deg;</h1>
                ) : null}
                
                {minmaxTemp(calculateTemp(props.day.min_temp), calculateTemp(props.day.max_temp))}

                <h4 data-testid="forecast-state" className="py-3">{props.day.weather_state_name}</h4>
            </div>
        </div>
    );
};

function formatDate(date) {
    return moment(new Date(date)).format('dddd, MMMM Do YYYY');
}

function minmaxTemp(min, max) {
    if (min && max) {
        return (
            <h3> 
                <span data-testid="forecast-min-temp" className="px-4">{min}&deg;</span>
                <span data-testid="forecast-max-temp" className="px-4">{max}&deg;</span>
            </h3>
        )
    }
}

function calculateTemp(temp) {
    return Math.floor(temp);
}

export default Weather;