export const CREATE_CHANGE_MAIN_COLOR = 'CREATE_CHANGE_MAIN_COLOR';
export const CREATE_CHANGE_COLLECTION = 'CREATE_CHANGE_COLLECTION';

export const changeMainColor = (color) => ({
  type: CREATE_CHANGE_MAIN_COLOR,
  payload: color
});

export const changeColorCollection = (colors) => ({
  type: CREATE_CHANGE_COLLECTION,
  payload: colors
});
