import { createReducer } from 'redux-act';

import { state } from '../state/state';
import { modalsReducer } from './modals.module';

const reducers = createReducer({
  ...modalsReducer,
}, state);

export { reducers };
