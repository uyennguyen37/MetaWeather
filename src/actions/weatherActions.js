import API from '../utils/API';
import {
  GET_WEATHER,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL,
  SEARCH_LOCATION,
  SEARCH_LOCATION_FAIL,
  SEARCH_LOCATION_SUCCESS,
  SET_CURRENT_LOCATION
 } from '../constants/weatherConstants';
 
const getLocationTitle = (data) => {
  return `${data.title}, ${data.parent.title}`
}

export const searchLocation = (query = '') => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_LOCATION });
    if (!query) {
      dispatch({ type: SEARCH_LOCATION_SUCCESS, payload: [] });
      return;
    }
    const { data } = await API.get('location/search/', { params: { query } })
    dispatch({ type: SEARCH_LOCATION_SUCCESS, payload: data });
    return data
  } catch (error) {
    dispatch({ type: SEARCH_LOCATION_FAIL, payload: error.message });
  }
}

export const getWeatherForecasts = (woeid = '') => async (dispatch) => {
  try {
    dispatch({ type: GET_WEATHER });
    const { data } = await API.get(`location/${woeid}`)
    const title = getLocationTitle(data)
    
    dispatch({ type: SET_CURRENT_LOCATION, payload: title })
    dispatch({ type: GET_WEATHER_SUCCESS, payload: data.consolidated_weather });
    return data
  } catch (error) {
    dispatch({ type: GET_WEATHER_FAIL, payload: error.message });
  }
}