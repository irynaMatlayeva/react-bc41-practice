import * as types from './actionsTypes';

const initialState = [];

const tutorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_TUTORS:
      // console.log(action.payload);
      return action.payload;

    case types.CREATE_TUTORS:
      console.log(action);
      return [...state, action.payload];

    case types.DELETE_TUTORS:
      console.log(action);
      return state.filter(tutor => tutor.id !== action.payload);

    default:
      return state;
  }
};

export default tutorsReducer;
