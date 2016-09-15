import {
  REMOVE_COLOR,
  ADD_COLOR,
  REMOVE_ALL_COLORS,
  ADD_ALL_COLORS
} from '../actions/collection';

const initialState = {
  collection: new Array(10).fill(null)
};

export default function collection(state = initialState, action) {
  switch (action.type) {
    case REMOVE_COLOR: {
      const index = state.collection.indexOf(action.color);
      return {
        ...state,
        collection: [
          ...state.collection.slice(0, index),
          ...state.collection.slice(index + 1),
          null
        ]
      };
    }
    case ADD_COLOR: {
      const index = state.collection.indexOf(null);
      return {
        ...state,
        collection: [
          ...state.collection.slice(0, index),
          action.color,
          ...state.collection.slice(index + 1)
        ]
      };
    }
    case REMOVE_ALL_COLORS:
      return {
        ...state,
        collection: new Array(10).fill(null)
      };
    case ADD_ALL_COLORS:
      return {
        ...state,
        collection: action.colors
      };
    default:
      return state;
  }
}
