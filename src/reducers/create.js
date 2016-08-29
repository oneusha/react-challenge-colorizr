import {
	CREATE_CHANGE_MAIN_COLOR,
	CREATE_CHANGE_COLLETION } from '../constants/Create';

const initialState = {
  color: '#20b2aa',
  colors: Array(10).fill(null),
};

export default function createState(state = initialState, action) {
  switch (action.type) {
    case CREATE_CHANGE_MAIN_COLOR:
      return { ...state, color: action.payload };
    case CREATE_CHANGE_COLLETION:
      return { ...state, colors: action.payload };
    default:
      return state;
  }
}
