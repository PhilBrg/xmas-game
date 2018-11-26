import reducer from './reducer'
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
  xmas: reducer
})

const store = createStore(reducers, {}, composeWithDevTools())

export default store
