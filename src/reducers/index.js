import { combineReducers } from 'redux';
import collection from './collection';
import mainColor from './mainColor';
import sources from './sources';

export const rootReducer = combineReducers({
  collection,
  mainColor,
  sources
});
