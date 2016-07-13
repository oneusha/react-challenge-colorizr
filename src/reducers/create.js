import { 
	CREATE_COLOR_CHANGE, 
	CREATE_REMOVE_COLOR, 
	CREATE_ADD_COLOR } from '../constants/Create';

const initialState = { 
	color: '#20b2aa',
	colors: Array(10).fill(null)
};

export default function createState(state=initialState, action) {
	switch (action.type) {
		case CREATE_COLOR_CHANGE:
			return Object.assign({}, state, { color: action.payload });
		case CREATE_REMOVE_COLOR:
			return Object.assign({}, state, { colors: action.payload });
		case CREATE_ADD_COLOR:
			return Object.assign({}, state, { colors: action.payload });
		default:
			return state;
	}
}