import { all, takeLatest, take } from 'redux-saga/effects';
import { Types as LoginTypes } from '../ducks/login';
import { Types as PatientTypes } from '../ducks/patient';
import { Types as PatientListTypes } from '../ducks/patientList';
import { getSignin } from './login';
import { storePatient } from './patient';
import { readPatientList, deletePatientList } from './patientList';

export default function* rootSaga() {
  yield all([
    takeLatest(LoginTypes.GET_REQUEST, getSignin),
    takeLatest(PatientTypes.CREATE_REQUEST, storePatient),
    takeLatest(PatientListTypes.READ_REQUEST, readPatientList),
    takeLatest(PatientListTypes.DELETE_REQUEST, deletePatientList),
  ]);
}
