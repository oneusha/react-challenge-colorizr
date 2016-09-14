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
    case REMOVE_COLOR:
      let removeColorIndex = state.collection.indexOf(action.color);
      return {
        ...state,
        collection: [
          ...state.collection.slice(0, removeColorIndex),
          ...state.collection.slice(removeColorIndex + 1),
          null
        ]
      };
    case ADD_COLOR:
      let addColorIndex = state.collection.indexOf(null);
      return {
        ...state,
        collection: [
            ...state.collection.slice(0, addColorIndex),
            action.color,
            ...state.collection.slice(addColorIndex + 1)
        ]
      };
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
