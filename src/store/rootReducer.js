import cafesReducer from './reducer/cafes'
import roleReducer from './reducer/role'
import typesReducer from './reducer/types'

// rootReducer.js
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cafes: cafesReducer,
  role: roleReducer,
  types: typesReducer,
  // Add more reducers as needed
});

export default rootReducer;
