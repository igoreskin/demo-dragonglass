import { combineReducers } from 'redux';
import bids, * as fromBids from './bids';
import transactions, * as fromTransactions from './transactions';

const auctioneer = combineReducers({
	bids,transactions
});

export default auctioneer;

export const getBids = (state) => fromBids.getBids(state.bids);
export const getTransactions = (state) => fromTransactions.getTransactions(state.transactions);