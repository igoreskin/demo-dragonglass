import axios from 'axios';

export const fetchBids = (id) => {
	// return axios.get(`/api/dapps/${id}`).then(extract);
	return Promise.resolve(bids);
};

const bids = [
	{
		account: '568721',
		amount: '27.00',
		time: '22:18:45'
	},
	{
		account: '287364',
		amount: '26.59',
		time: '21:45:22'
	},
	{
		account: '234071',
		amount: '26.00',
		time: '21:45:22'
	},
	{
		account: '132134',
		amount: '25.75',
		time: '21:45:22'
	},
	{
		account: '230873',
		amount: '25.50',
		time: '21:45:22'
	},
	{
		account: '123412',
		amount: '25.00',
		time: '21:45:22'
	}
];