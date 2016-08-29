import {
  CREATE_CHANGE_MAIN_COLOR,
  CREATE_CHANGE_COLLETION
} from '../constants/Create';

export function changeMainColor(color) {
  return {
    type: CREATE_CHANGE_MAIN_COLOR,
    payload: color
  };
}

export function changeColorCollection(colors) {
  return {
    type: CREATE_CHANGE_COLLETION,
    payload: colors
  };
}
