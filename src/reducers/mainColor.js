import { CHANGE_MAIN_COLOR } from '../actions/mainColor';
import tinycolor from 'tinycolor2';

const initialState = { mainColor: tinycolor.random().toString() };

export default function mainColor(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MAIN_COLOR:
      return { mainColor: action.color };
    default:
      return state;
  }
}
