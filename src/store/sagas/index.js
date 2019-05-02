import { all, takeLatest, take } from 'redux-saga/effects';
import { Types as LoginTypes } from '../ducks/login';
import { getSignin } from './login';

export default function* rootSaga() {
  yield all([takeLatest(LoginTypes.GET_REQUEST, getSignin)]);
}
