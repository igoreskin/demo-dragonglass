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