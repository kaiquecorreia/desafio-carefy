import { Alert } from 'react-native';
import { call, put } from 'redux-saga/effects';
import { Creators as PatientActions } from '../ducks/patient';
import { Store } from '../../Database/SqlHandler';
import { navigate } from '../../services/navigation';

/**
 * Armazena os dados do paciente no BD
 */
export function* storePatient(action) {
  try {
    const {
      patient: { name, hospital, user_id, enabled },
    } = action.payload;
    const patient = yield call(
      Store,
      `INSERT INTO patients (name, hospital, user_id, enabled) VALUES ('${name}', '${hospital}', ${user_id},${enabled} );`,
      'patients',
    );

    yield put(PatientActions.patientCreateSuccess(patient[0]));
    Alert.alert(
      'Concluído',
      'Paciente inserido com sucesso!',
      [
        {
          text: 'OK',
          onPress: () => {
            navigate('Login');
          },
        },
      ],
      { cancelable: false },
    );
  } catch (error) {
    yield put(PatientActions.patientCreateFailure());
  }
}
