export const REMOVE_COLOR = 'REMOVE_COLOR';
export const ADD_COLOR = 'ADD_COLOR';
export const REMOVE_ALL_COLORS = 'REMOVE_ALL_COLORS';
export const ADD_ALL_COLORS = 'ADD_ALL_COLORS';

export const removeColor = color => ({ type: REMOVE_COLOR, color });
export const addColor = color => ({ type: ADD_COLOR, color });
export const removeAllColors = () => ({ type: REMOVE_ALL_COLORS });
export const addAllColors = () => ({ type: ADD_ALL_COLORS });
