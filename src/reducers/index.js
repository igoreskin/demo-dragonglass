import { combineReducers } from 'redux';
import bids, * as fromBids from './bids';
import transactions, * as fromTransactions from './transactions';
import users, * as fromUsers from './users';
import time, * as fromTime from './time';

const auctioneer = combineReducers({
	bids, transactions, users, time
});

export default auctioneer;

export const getBids = (state) => fromBids.getBids(state.bids);
export const getTransactions = (state) => fromTransactions.getTransactions(state.transactions);
export const getUsers = (state) => fromUsers.getUsers(state.users);
export const getTime = (state) => fromTime.getTime(state.time);