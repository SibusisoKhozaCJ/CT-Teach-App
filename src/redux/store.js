import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/combine';
import middleware, { saga } from './middleware';

import sagaWatcher from "./sagas/saga-watcher";
// Grab the state from a global variable injected into the server-generated HTML

var preloadedState = {};
if (typeof window != 'undefined' && window.__PRELOADED_STATE__) {
    preloadedState = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;
}

const composeEnhancers = (typeof window != 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;
const store = createStore(reducers, preloadedState, composeEnhancers(
    applyMiddleware(...middleware)
));

saga.run(sagaWatcher);

window.store = store;
export default store;
