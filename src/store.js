import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { weatherGetReducer } from './reducers/weatherReducers';

const reducer = combineReducers({
  weatherForecasts : weatherGetReducer
});

//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, compose(applyMiddleware(thunk)));
export default store;