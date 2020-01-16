import { FETCH_BIDS_SUCCESS, FETCH_BIDS_FAILURE } from '../types';

export default function news(state = [], action) {
	switch (action.type) {
		case FETCH_BIDS_SUCCESS:
			return [ ...action.payload ];
		case FETCH_BIDS_FAILURE:
			return [];
		default:
			return state;
	}
}

export const getBids = (state) => state;