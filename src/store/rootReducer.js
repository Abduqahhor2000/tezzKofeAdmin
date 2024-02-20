import cafesReducer from './reducer/cafes'
import employeesReducer from './reducer/employees';
import roleReducer from './reducer/role'
import typesReducer from './reducer/types'
import tablesReducer from "./reducer/tables"

// rootReducer.js
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cafes: cafesReducer,
  role: roleReducer,
  types: typesReducer,
  employees: employeesReducer,
  tables: tablesReducer,
  // Add more reducers as needed
});

export default rootReducer;
