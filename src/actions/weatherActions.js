import API from "../utils/API";
import { WEATHER_GET_REQUEST, 
        WEATHER_GET_SUCCESS, 
        WEATHER_GET_FAIL 
        } from "../constants/weatherConstants";

const getWeatherForecasts = (city = '') => async (dispatch) => {
    try {
      dispatch({ type: WEATHER_GET_REQUEST });
      const { data } = await API.get("location/search/?query=" + city)
                                .then((res => {
                                    if (res.data) {
                                      return API
                                      .get(`location/${res.data[0].woeid}`)
                                    }
                                  }));
      dispatch({ type: WEATHER_GET_SUCCESS, payload: data });
    }
    catch (error) {
      dispatch({ type: WEATHER_GET_FAIL, payload: error.message });
    }
  }
  
  export { getWeatherForecasts }