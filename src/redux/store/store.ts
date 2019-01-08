import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { reducers } from '../modules/reducers';
import { saga } from '../saga/saga';
import { state as initialState } from '../state/state';
import { IState } from '../state/state.d';

const sagaMiddleware = createSagaMiddleware();

let middleware = applyMiddleware(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  // tslint:disable-next-line:no-var-requires
  middleware = require('redux-devtools-extension').composeWithDevTools(
    middleware,
  );
}

const combinedReducer = (state: IState, action: any) => ({
  ...reducers(state, action),
});

const store = createStore(combinedReducer, initialState, middleware);

sagaMiddleware.run(saga);

export { store };
