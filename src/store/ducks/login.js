export const Types = {
  GET_REQUEST: 'login/GET_REQUEST',
  GET_SUCCESS: 'login/GET_SUCCESS',
  GET_FAILURE: 'login/GET_FAILURE',
};

const INITIAL_STATE = { user: null, loading: false, error: false };

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        error: false,
      };
    case Types.GET_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: user => ({ type: Types.GET_REQUEST, payload: { user } }),
  loginSuccess: user => ({ type: Types.GET_SUCCESS, payload: { user } }),
  loginFailure: () => ({ type: Types.GET_FAILURE }),
};
