### Table of Contents
- [Description](#description)
- [How To Use](#how-to-use)
- [License](#license)
- [Contributor](#contributor)

---

## Description 
This MetaWeather is a weather application developed using MetaWeather API (https://www.metaweather.com/api/).

It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Technologies
- react (a JavaScript library for building user interfaces.)
- react-redux (React bindings for Redux)
- antd (an enterprise-class UI design language and React components implementation)
- axios (promise based HTTP client for the browser)
- momentjs (parse, validate, manipulate, and display dates)
- lodash (lodash modular utilities)

### Redux Data Flows 
For reference, consider these depictions of generic redux flows taken from [ReachJS Issue #653](https://github.com/reactjs/redux/issues/653].

<img src=https://camo.githubusercontent.com/5aba89b6daab934631adffc1f301d17bb273268b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343535322f415243482d5265647578322d7265616c2e676966 width="300">

<img src=https://camo.githubusercontent.com/9de527b9432cc9244dc600875b46b43311918b59/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343739302f415243482d5265647578322d657874656e6465642d7265616c2d6465636c657261746976652e676966 width="300">

### Reducers
The reducers maintain state of the weather app.

### Middleware

#### Thunk
[redux-thunk](https://github.com/gaearon/redux-thunk) 

### Actions
- `searchLocation` uses MetaWeather Location Search API with location query search term as a parameter and returns woeid (Where On Earth ID).
- `getWeatherForecasts` uses MetaWeather Location API with woeid as a parameter and returns weather information of that location.

### Components 
- `SearchBox`is a component for location search.
- `WeatherCard`is a component for a single day's weather forecast information.
- `WeatherList` is a component for 6 days' weather forecasts

I also use the following components from antd:
- `Title` for loading status, city & country.
- `AutoComplete` and `Spin` for search.
- `Row` and `Column` for weather list.

### Testing
- Using Jest & React Testing Library

## How To Use

#### Installation

In the project directory, you can run:

##### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

##### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## License 
MIT License 

## Contributor
Uyen Nguyen 
