import {
  CHANGE_MAIN_COLOR
} from '../actions/mainColor';

const initialState = {
  mainColor: '#20b2aa'
};

export default function mainColor(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MAIN_COLOR:
      return { ...state, mainColor: action.color };
    default:
      return state;
  }
}
