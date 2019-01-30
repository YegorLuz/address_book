import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers/';

import { watcher } from '../sagas/';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers(reducers), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcher);

export default store;