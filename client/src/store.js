import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// don't have to add file since it is called index.js
import rootReducer from './reucers';

const initialState = {}

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;