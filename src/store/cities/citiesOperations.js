import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  postCity,
  getCities,
  updateCity,
  deleteCity,
} from '../../api/citiesApi';

export const fetchCities = createAsyncThunk(
  'cities/fetchCities',
  async (_, thunkAPI) => {
    try {
      const { data } = await getCities();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const deleteCityOperation = createAsyncThunk(
  'cities/deleteCity',
  async (cityId, thunkAPI) => {
    try {
      const { data } = await deleteCity(cityId);
      console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
export const addCityOperation = createAsyncThunk(
  'cities/addCity',
  async (cityName, thunkAPI) => {
    try {
      const { data } = await postCity({ text: cityName });
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const editCityOperation = createAsyncThunk(
  'cities/editCity',
  async (data, thunkAPI) => {
    const { id, name } = data;
    try {
      const { data } = await updateCity(id, { text: name, id });
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
