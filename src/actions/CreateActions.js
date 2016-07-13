import { 
	CREATE_COLOR_CHANGE, 
	CREATE_REMOVE_COLOR, 
	CREATE_ADD_COLOR } from '../constants/Create';

export function changeColor(color) {
	return {
		type: CREATE_COLOR_CHANGE,
		payload: color
	}
}

export function removeColor(colors) {
	return {
		type: CREATE_REMOVE_COLOR,
		payload: colors
	}
}

export function addColor(colors) {
	return {
		type: CREATE_ADD_COLOR,
		payload: colors
	}
}