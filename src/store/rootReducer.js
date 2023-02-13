import { combineReducers } from 'redux';
import tutorsReducer from './tutors/reducer';
import { citiesReducer } from './cities/citiesSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const citiesConfig = {
  key: 'cities',
  storage,
};

export default combineReducers({
  tutors: tutorsReducer,
  cities: persistReducer(citiesConfig, citiesReducer),
});
