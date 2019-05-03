import { combineReducers } from 'redux';
import login from './login';
import patient from './patient';
import patientList from './patientList';

export default combineReducers({ login, patient, patientList });
