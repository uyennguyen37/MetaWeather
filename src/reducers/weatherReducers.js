import {
    GET_WEATHER,
    GET_WEATHER_FAIL,
    GET_WEATHER_SUCCESS,
    SEARCH_LOCATION,
    SEARCH_LOCATION_FAIL,
    SEARCH_LOCATION_SUCCESS,
    SET_CURRENT_LOCATION
  } from '../constants/weatherConstants';

const initialState = {
  cities: [],
  location: '',
  searching: false,
  searchError: null,
  weatherData: [],
  fetching: false,
  fetchError: null,
};
function weatherReducer (state = initialState, action) {
    switch (action.type) {
      case SET_CURRENT_LOCATION:
        return {
          ...state,
          location: action.payload
        }
      case SEARCH_LOCATION:
        return {
          ...state,
          searching: true,
        };
      case SEARCH_LOCATION_SUCCESS:
        return {
          ...state,
          cities: action.payload,
          searching: false,
        };
      case SEARCH_LOCATION_FAIL:
        return {
          ...state,
          searchError: action.error,
          searching: false,
        };
      case GET_WEATHER:
        return {
          ...state,
          fetching: true,
        };
      case GET_WEATHER_SUCCESS:
        return {
          ...state,
          weatherData: action.payload,
          fetching: false,
        };
      case GET_WEATHER_FAIL:
        return {
          ...state,
          fetchError: action.error,
          fetching: false,
        };
      default:
        return {...state};
   }
 }

export { weatherReducer }