import { call, put } from 'redux-saga/effects';
import { Creators as LoginActions } from '../ducks/login';
import { Read } from '../../Database/SqlHandler';
import { navigate } from '../../services/navigation';

// import { Creators as ErrorActions } from '../ducks/error';

export function* getSignin(action) {
  try {
    const user = yield call(
      Read,
      `SELECT * FROM users WHERE email = '${
        action.payload.user.email
      }' and password = '${action.payload.user.password}'`,
    );
    if (user[0].email) {
      yield put(LoginActions.loginSuccess(user[0]));
      navigate('PatientsList');
    } else {
      yield put(LoginActions.loginFailure());
    }
  } catch (error) {
    yield put(LoginActions.loginFailure());
    // ErrorActions.setError('Não foi possível obter os detalhes da playlist'),
  }
}
