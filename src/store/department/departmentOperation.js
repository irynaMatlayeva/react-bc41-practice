import {
  postDepartment,
  getDepartments,
  updateDepartment,
  deleteDepartment,
} from 'api/departments';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDepartments = createAsyncThunk(
  'departments/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await getDepartments();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteDepartmentsOperation = createAsyncThunk(
  'departments/deleteDepartmen',
  async (departmentId, thunkAPI) => {
    try {
      const { data } = await deleteDepartment(departmentId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addDepartmentsOperation = createAsyncThunk(
  'departments/addDepartmen',
  async (departmentName, thunkAPI) => {
    try {
      const { data } = await postDepartment({ name: departmentName });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateDepartmentsOperation = createAsyncThunk(
  'departments/updateDepartmen',
  async ({ id, text }, thunkAPI) => {
    try {
      const res = await updateDepartment(id, { id, name: text });
      // console.log(res.data.id)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
