import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import logger from 'redux-logger';

const middlewares = [];
// const middlewares = [logger];

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
)

export default store;

/**
 https://react-redux.js.org/introduction/getting-started
 https://react-redux.js.org/api/connect

 */
