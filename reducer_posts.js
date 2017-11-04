import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state={}, action) {
	switch (action.type) {
	case FETCH_POST: 
		return { ...state, [action.payload.data.id]: action.payload.data };
		// const post = action.payload.data;
		// const newState = {...state }
		// newState[post.id] = post;
		// return newState;

		//make a new key(data.id) on this object and set its
		// value to action.payload.data
		
	case FETCH_POSTS:
		return _.mapKeys(action.payload.data, 'id');
	default: 
		return state;
	}
}