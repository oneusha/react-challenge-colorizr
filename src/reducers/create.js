import {
	CREATE_CHANGE_MAIN_COLOR,
	CREATE_CHANGE_COLLECTION } from '../actions/CreateActions';

const initialState = {
  color: '#20b2aa',
  colors: new Array(10).fill(null)
};

export default function createState(state = initialState, action) {
  switch (action.type) {
    case CREATE_CHANGE_MAIN_COLOR:
      return { ...state, color: action.payload };
    case CREATE_CHANGE_COLLECTION:
      return { ...state, colors: action.payload };
    default:
      return state;
  }
}
