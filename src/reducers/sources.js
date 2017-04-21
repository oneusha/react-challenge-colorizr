import {
  CHANGE_COLOR
} from '../actions/sources';
import { getLightAndDark } from '../utils/generateSource';

const initialState = {
  sources: []
};

export default function sources(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLOR: {
      return {
        sources: getLightAndDark(action.color)
      };
    }
    default:
      return state;
  }
}
