import { combineReducers } from 'redux';
import login from './login';
import patient from './patient';

export default combineReducers({ login, patient });
