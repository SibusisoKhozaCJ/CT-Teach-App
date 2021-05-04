import thunk from './middleware/thunk';
import createSagaMiddleware from "redux-saga";
import { createLogger } from 'redux-logger';

export const saga = createSagaMiddleware();

let middleware = [thunk, saga, createLogger()];
if (process.env.NODE_ENV === 'production') middleware = [thunk, saga];

export default middleware;
