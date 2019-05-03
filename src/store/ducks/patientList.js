export const Types = {
  READ_REQUEST: 'patientList/READ_REQUEST',
  READ_SUCCESS: 'patientList/READ_SUCCESS',
  READ_FAILURE: 'patientList/READ_FAILURE',
};

const INITIAL_STATE = {
  patientsList: [],
  loading: true,
  error: false,
};

export default function patientList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.READ_REQUEST:
      return { ...state };
    case Types.READ_SUCCESS:
      return {
        ...state,
        patientsList: action.payload,
        loading: false,
        error: false,
      };
    case Types.READ_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

export const Creators = {
  patientListReadRequest: userId => ({
    type: Types.READ_REQUEST,
    payload: { userId },
  }),
  patientListReadSuccess: patientList => ({
    type: Types.READ_SUCCESS,
    payload: patientList,
  }),
  patientListReadFailure: () => ({ type: Types.READ_FAILURE }),
};
