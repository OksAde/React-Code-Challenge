import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import resultsReducer from './reducers/resultsReducer';

const store = createStore(resultsReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
