import {
  REMOVE_COLOR,
  ADD_COLOR,
  REMOVE_ALL_COLORS,
  ADD_ALL_COLORS
} from '../actions/collection';

const initialState = {
  collection: []
};

export default function collection(state = initialState, action) {
  switch (action.type) {
    case REMOVE_COLOR: {
      return {
        collection: state.collection.filter(item => item !== action.color)
      };
    }
    case ADD_COLOR: {
      return {
        collection: [...state.collection, action.color]
      };
    }
    case REMOVE_ALL_COLORS:
      return {
        collection: []
      };
    case ADD_ALL_COLORS:
      return {
        collection: action.colors
      };
    default:
      return state;
  }
}
