import { RESET_AUCTION_SUCCESS, RESET_AUCTION_FAILURE } from '../types';

export default function time(state = [], action) {
	switch (action.type) {
		case RESET_AUCTION_SUCCESS:
            console.log("PAYLOAD: ", action.payload)
			return [ ...action.payload];
		case RESET_AUCTION_FAILURE:
            console.log("RESET AUCTION FAILURE")
			return [];
		default:
			return state;
	}
}

export const getTime = (state) => state;