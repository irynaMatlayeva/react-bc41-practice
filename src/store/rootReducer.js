import { combineReducers } from 'redux';
import tutorsReducer from './tutors/reducer';
import { citiesReducer } from './cities/citiesSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { departmentsReducer } from './department/departmentSlice';

const citiesConfig = {
  key: 'cities',
  storage,
};

const deparmentsConfig = {
  key: 'departdemts',
  storage,
};

export default combineReducers({
  tutors: tutorsReducer,
  cities: persistReducer(citiesConfig, citiesReducer),
  departments: persistReducer(deparmentsConfig, departmentsReducer),
});
