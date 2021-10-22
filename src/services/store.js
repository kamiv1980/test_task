/** @format */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { loadingChecker } from './middlewares/loadingChecker';
import { rootReducer } from './rootReducer';

const loggerMiddleware = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => '#139BFE',
    prevState: () => '#1c5faf',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#ff0005',
  },
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, loggerMiddleware, loadingChecker)),
);
