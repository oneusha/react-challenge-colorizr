import {
  CREATE_CHANGE_MAIN_COLOR,
  CREATE_CHANGE_COLLETION
} from '../constants/Create';

export const changeMainColor = (color) => ({
  type: CREATE_CHANGE_MAIN_COLOR,
  payload: color
});

export const changeColorCollection = (colors) => ({
  type: CREATE_CHANGE_COLLETION,
  payload: colors
});
