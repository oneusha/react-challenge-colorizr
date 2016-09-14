import { combineReducers } from 'redux';
import collection from './collection';
import mainColor from './mainColor';

export const rootReducer = combineReducers({
  collection,
  mainColor
});
