export const Types = {
  CREATE_REQUEST: 'patient/CREATE_REQUEST',
  CREATE_SUCCESS: 'patient/CREATE_SUCCESS',
  CREATE_FAILURE: 'patient/CREATE_FAILURE',
};

const INITIAL_STATE = {
  patient: null,
  loading: false,
  error: false,
};

export default function patient(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_REQUEST:
      return { ...state, loading: true };
    case Types.CREATE_SUCCESS:
      return {
        ...state,
        patient: action.payload.patient,
        loading: false,
        error: false,
      };
    case Types.CREATE_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

export const Creators = {
  patientCreateRequest: patient => ({
    type: Types.CREATE_REQUEST,
    payload: { patient },
  }),
  patientCreateSuccess: patient => ({
    type: Types.CREATE_SUCCESS,
    payload: { patient },
  }),
  patientCreateFailure: () => ({ type: Types.CREATE_FAILURE }),
};
