import { fetchTutors, createTutor, deleteTutor } from '../../api/tutorsApi';
import * as types from './actionsTypes';

export const loadTutorsAction = () => dispatch => {
  fetchTutors().then(res =>
    dispatch({ type: types.LOAD_TUTORS, payload: res.data })
  );
};

export const createTutorsAction = data => dispatch => {
  createTutor(data).then(res => {
    console.log(res.data);
    dispatch({ type: types.CREATE_TUTORS, payload: res.data });
  });
};

export const deleteTutorsAction = id => dispatch => {
  deleteTutor(id).then(res => {
    console.log(res.data);
    dispatch({ type: types.DELETE_TUTORS, payload: res.data.id });
  });
};
