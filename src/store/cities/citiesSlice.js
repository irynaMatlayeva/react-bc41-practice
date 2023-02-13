import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCities,
  deleteCityOperation,
  addCityOperation,
  editCityOperation,
} from './citiesOperations';

const initialState = {
  cities: [],
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  extraReducers: {
    [fetchCities.fulfilled]: (state, { payload }) => {
      state.cities = payload.map(city => {
        return { ...city, relation: 'cities' };
      });
    },
    [deleteCityOperation.fulfilled]: (state, { payload }) => {
      state.cities = state.cities.filter(city => city.id !== payload.id);
    },
    [addCityOperation.fulfilled]: (state, { payload }) => {
      state.cities.unshift({ ...payload, relation: 'cities' });
    },
    [editCityOperation.fulfilled]: (state, { payload }) => {
      const id = payload.id;

      state.cities = state.cities.map(city =>
        city.id === id ? payload : city
      );
    },
  },
});

export const citiesReducer = citiesSlice.reducer;
