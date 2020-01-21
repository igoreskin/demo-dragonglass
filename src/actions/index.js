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

const contractId = '0.0.144616'  //'0.0.144309'; //'0.0.144068'
// const consensusStartInEpoch='1579576576000';


export const fetchTransactionsNew = (apiKey, consensusStartInEpoch) => (dispatch, getState) => { 
	console.log("TIME IN ACTIONS: ", consensusStartInEpoch)
	return fetch(`https://api-testnet.dragonglass.me/hedera/api/contracts/${contractId}/calls?contractMethodName=1998aeef&consensusStartInEpoch=1579576576000&status=SUCCESS&from=0&size=5&sortBy=desc`, {
	method: 'GET',
	headers: {
		'x-api-key': apiKey,
	}
	})
	.then(response => response.json())
	.then(json => {
		console.log("DATA IN ACTIONS: ", json.data);
		return (dispatch({type: types.FETCH_TRANSACTIONS_SUCCESS,
		payload: json.data}))
	},
	(error) => {
		dispatch({
			type: types.FETCH_TRANSACTIONS_FAILURE,
			message: error.message || 'Something went wrong.'
		});
	}
	)
}

export const placeBid = (amount) => (dispatch, getState) => { 
	console.log("IN PLACE BID")
	return fetch(`http://localhost:8081/bid/Alice/${amount}/${contractId}`, {
		method: 'POST',
		headers: {
			'Accept': "application/json",
			'Content-Type': "application/json",
		},
	})
	.then(response => response.json())
	.then(json => {
		console.log("BID PLACED: ", json.data);
	},
	)
}

export const fetchUsers = () => (dispatch, getState) => { 
	return fetch(`http://localhost:8081/bidders`)
	.then(response => response.json())
	.then(json => {
		console.log("USERS IN ACTIONS: ", json);
		return (dispatch({
		type: types.FETCH_USERS_SUCCESS,
		payload: json}))
	},
	(error) => {
		dispatch({
			type: types.FETCH_USERS_FAILURE,
			message: error.message || 'Something went wrong.'
		});
	}
	)
}

export const resetAuction = () => (dispatch, getState) => { 
	return fetch(`http://localhost:8081/resetAuction`)
	.then(response => response.json())
	.then(json => {
		console.log("ACTION RESET: ", json);
		return (dispatch({
		type: types.RESET_AUCTION_SUCCESS,
		payload: Date.now()}))
	},
	(error) => {
		dispatch({
			type: types.RESET_AUCTION_FAILURE,
			message: error.message || 'Something went wrong.'
		});
	}
	)
}