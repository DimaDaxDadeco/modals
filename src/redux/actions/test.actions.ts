import { createAction } from 'redux-act';
import { select, takeEvery } from 'redux-saga/effects';

import { ISaga } from './common.d';

interface IAction {
  data: number;
}

interface IActionSaga extends ISaga {
  payload: IAction;
}

export const action = createAction<IAction>('create action', () => ({
  data: 1,
}));

function* actionSaga(response: IActionSaga) {
  const state = yield select();

  return state;
}

export const watchAction = takeEvery(action.getType(), actionSaga);
