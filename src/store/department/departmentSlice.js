import { createSlice } from '@reduxjs/toolkit';
import {
  fetchDepartments,
  deleteDepartmentsOperation,
  addDepartmentsOperation,
  updateDepartmentsOperation,
} from './departmentOperation';

const initialState = { items: [] };

const convertToFrontDepartments = ({ id, name }) => {
  return { id, text: name, relation: 'departments' };
};

const deparmentsSlice = createSlice({
  name: 'departments',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchDepartments.fulfilled, (state, { payload }) => {
        state.items = payload.map(convertToFrontDepartments);
      })
      .addCase(deleteDepartmentsOperation.fulfilled, (state, { payload }) => {
        const departmentId = payload.id;
        state.items = state.items.filter(
          department => department.id !== departmentId
        );
      })
      .addCase(addDepartmentsOperation.fulfilled, (state, { payload }) => {
        const department = convertToFrontDepartments(payload);

        if (
          state.items.some(
            item => item.text.toLowerCase() !== department.text.toLowerCase()
          )
        ) {
          state.items.push(department);
        } else {
          console.log('Це імя вже існує');
        }
      })
      .addCase(updateDepartmentsOperation.fulfilled, (state, { payload }) => {
        const department = convertToFrontDepartments(payload);
        state.items = state.items.map(item =>
          item.id === department.id ? department : item
        );
      });
  },
});

export const departmentsReducer = deparmentsSlice.reducer;
