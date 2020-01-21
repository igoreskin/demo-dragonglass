import { FETCH_TRANSACTIONS_SUCCESS, FETCH_TRANSACTIONS_FAILURE } from '../types';

export default function transactions(state = [], action) {
	switch (action.type) {
		case FETCH_TRANSACTIONS_SUCCESS:
            console.log("PAYLOAD: ", action.payload)
			return [ ...action.payload];
		case FETCH_TRANSACTIONS_FAILURE:
            console.log("TRANSACTION FETCH FAILURE")
			return [];
		default:
			return state;
	}
}

export const getTransactions = (state) => state;