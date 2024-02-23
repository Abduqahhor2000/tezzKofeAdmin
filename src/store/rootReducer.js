import cafesReducer from './reducer/cafes'
import employeesReducer from './reducer/employees';
import roleReducer from './reducer/role'
import typesReducer from './reducer/types'
import tablesReducer from "./reducer/tables"
import menusReducer from "./reducer/menus"
import productsReducer from "./reducer/products"
import adminReducer from "./reducer/admin"
import imagesReducer from "./reducer/images"

// rootReducer.js
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cafes: cafesReducer,
  role: roleReducer,
  types: typesReducer,
  employees: employeesReducer,
  tables: tablesReducer,
  menus: menusReducer,
  products: productsReducer,
  admin: adminReducer,
  images: imagesReducer,
  // Add more reducers as needed
});

export default rootReducer;
