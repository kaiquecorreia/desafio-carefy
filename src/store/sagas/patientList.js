import { call, put } from 'redux-saga/effects';
import { Creators as PatientListActions } from '../ducks/patientList';
import { Read, Delete } from '../../Database/SqlHandler';

export function* readPatientList(action) {
  try {
    const { userId } = action.payload;
    const query = `
    SELECT p.id, p.name, p.hospital, p.enabled,
    u.name as user
    FROM patients p
    JOIN users u ON u.id = p.user_id
    WHERE user_id = ${userId}
    `;
    const patientList = yield call(Read, query);

    yield put(PatientListActions.patientListReadSuccess(patientList));
  } catch (error) {
    console.log(error);
    yield put(PatientListActions.patientListReadFailure());
  }
}
export function* deletePatientList(action) {
  try {
    const { userId } = action.payload;
    const query = `
    DELETE FROM patients WHERE id = ${userId}
    `;
    const result = yield call(Delete, query);
    if (result) {
      yield put(PatientListActions.patientListDeleteSuccess(userId));
    }
  } catch (error) {
    console.log(error);
    yield put(PatientListActions.patientListDeleteFailure());
  }
}
