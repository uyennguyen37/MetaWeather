import { WEATHER_GET_REQUEST, 
        WEATHER_GET_SUCCESS, 
        WEATHER_GET_FAIL 
        } from "../constants/weatherConstants";

function weatherGetReducer(state = { location: '', forecastDays: [], error: false }, action) {
  switch (action.type) {
    case WEATHER_GET_REQUEST:
      return { location: '', forecastDays: [], error: false, isLoading: true};
    case WEATHER_GET_SUCCESS:
      return { location: `${action.payload.title}, ${action.payload.parent.title}`, forecastDays: action.payload.consolidated_weather, error: false, isLoading: false };
    case WEATHER_GET_FAIL:
      return { error: action.payload }
    default:
      return state;
  }
}

export { weatherGetReducer }