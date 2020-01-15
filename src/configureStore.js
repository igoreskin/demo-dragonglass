import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import hashscan from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
	const middlewares = [ thunk ];

	return createStore(/*hashscan, */composeEnhancer(applyMiddleware(...middlewares)));
};

export default configureStore;