import * as api from '../apis';
import * as types from '../types';
// import * as constants from '../constants';

export const fetchBids = () => (dispatch, getState) =>
	api.fetchBids().then(
		(response) => {
			dispatch({
				type: types.FETCH_BIDS_SUCCESS,
				payload: response
			});
			return response;
		},
		(error) => {
			dispatch({
				type: types.FETCH_BIDS_FAILURE,
				message: error.message || 'Something went wrong.'
			});
		}
	);

export const fetchTransactions = (contractId, apiKey) => (dispatch, getState) =>
	api.fetchTransactions(contractId, apiKey).then(
		(response) => {
			dispatch({
				type: types.FETCH_TRANSACTIONS_SUCCESS,
				payload: response
			});
			console.log("RESPONSE IN ACTIONS: ", response)
			return response;
		},
		(error) => {
			dispatch({
				type: types.FETCH_TRANSACTIONS_FAILURE,
				message: error.message || 'Something went wrong.'
			});
		}
	);

// export const fetchTransactions = (contractID, apiKey) => (dispatch, getState) => { 
// 	return fetch(`https://api-testnet.dragonglass.me/hedera/api/transactions?contractID=${contractID}&transactionTypes=CONTRACT_CALL`, {
// 	method: 'GET',
// 	headers: {
// 		'x-api-key': apiKey,
// 	}
// 	})
// 	.then(response => response.json())
// 	.then(json => {
// 		console.log("DATA IN ACTIONS: ", json.data);
// 		return (dispatch({type: types.FETCH_TRANSACTIONS_SUCCESS,
// 		payload: json.data}))
// 	},
// 	(error) => {
// 		dispatch({
// 			type: types.FETCH_TRANSACTIONS_FAILURE,
// 			message: error.message || 'Something went wrong.'
// 		});
// 	}
// 	)
// }