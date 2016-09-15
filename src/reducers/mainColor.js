import { CHANGE_MAIN_COLOR } from '../actions/mainColor';
import { DEFAULT_MAIN_COLOR } from '../config/constants';

const initialState = { mainColor: DEFAULT_MAIN_COLOR };

export default function mainColor(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MAIN_COLOR:
      return { ...state, mainColor: action.color };
    default:
      return state;
  }
}
