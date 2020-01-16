import { combineReducers } from 'redux';
import bids, * as fromNews from './bids';

const auctioneer = combineReducers({
	bids
});

export default auctioneer;

export const getBids = (state) => fromNews.getBids(state.bids);