export const Types = {
  READ_REQUEST: 'patientList/READ_REQUEST',
  READ_SUCCESS: 'patientList/READ_SUCCESS',
  READ_FAILURE: 'patientList/READ_FAILURE',

  DELETE_REQUEST: 'patientList/DELETE_REQUEST',
  DELETE_SUCCESS: 'patientList/DELETE_SUCCESS',
  DELETE_FAILURE: 'patientList/DELETE_FAILURE',
};

const INITIAL_STATE = {
  patientsList: [],
  loading: true,
  loadingDelete: false,
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

    case Types.DELETE_REQUEST:
      return { ...state };
    case Types.DELETE_SUCCESS:
      return {
        patientsList: [
          ...state.patientsList.filter(
            patient => patient.id !== action.payload.userId,
          ),
        ],
        loadingDelete: false,
        error: false,
      };
    case Types.DELETE_FAILURE:
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

  patientListDeleteRequest: userId => ({
    type: Types.DELETE_REQUEST,
    payload: { userId },
  }),
  patientListDeleteSuccess: userId => ({
    type: Types.DELETE_SUCCESS,
    payload: { userId },
  }),
  patientListDeleteFailure: () => ({ type: Types.DELETE_FAILURE }),
};
