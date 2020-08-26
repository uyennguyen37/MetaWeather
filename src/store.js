import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { weatherReducer } from './reducers/weatherReducers';

const reducer = combineReducers({
  weatherReducer
});

const store = createStore(reducer, compose(applyMiddleware(thunk)));
export default store;