import axios from "axios";

export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/",
  responseType: "json"
});