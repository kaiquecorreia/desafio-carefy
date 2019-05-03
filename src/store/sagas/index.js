import { all, takeLatest, take } from 'redux-saga/effects';
import { Types as LoginTypes } from '../ducks/login';
import { Types as PatientTypes } from '../ducks/patient';
import { getSignin } from './login';
import { storePatient } from './patient';

export default function* rootSaga() {
  yield all([
    takeLatest(LoginTypes.GET_REQUEST, getSignin),
    takeLatest(PatientTypes.CREATE_REQUEST, storePatient),
  ]);
}
