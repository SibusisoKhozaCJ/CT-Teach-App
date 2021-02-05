import thunk from './middleware/thunk';
import createSagaMiddleware from "redux-saga";

export const saga = createSagaMiddleware();

const middleware = [
    thunk,
    saga
];

export default middleware;
