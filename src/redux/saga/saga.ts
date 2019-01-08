import { all } from 'redux-saga/effects';

import { watchAction } from '../actions/test.actions';

export function* saga(): any {
  yield all([watchAction]);
}
