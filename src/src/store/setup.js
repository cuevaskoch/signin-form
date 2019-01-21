import Immutable from 'immutable';
import api from '../api';

const AUTH_REQUEST = 'setup/auth/request';
const AUTH_STATUS = 'setup/auth/status';
const AUTH_FAILURE = 'setup/auth/failure';

const authorizationStatus = (authStatus) => ({
  type: AUTH_STATUS,
  payload: { authStatus },
 });

const authorizationFailure = (error) => ({
  type: AUTH_FAILURE,
  payload: { error },
});

export const requestAuthorization = () => (dispatch) => {
  dispatch({ type: AUTH_REQUEST });

  const onSuccess = (authStatus) => {
    if (authStatus === true) {
      dispatch(authorizationStatus(authStatus));
    }
  };
  const onFailure = (error) => dispatch(authorizationFailure(error));

  api.auth.authenticate(onSuccess, onFailure);
};

const authReducer = (state = new Immutable.Map(), action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return state.merge({
        isPending: true,
        isAuthorized: false,
        isFailure: false,
      });
    case AUTH_STATUS:
      return state.merge({
        isPending: false,
        isAuthorized: action.payload.authStatus,
        isFailure: false,
      });
    case AUTH_FAILURE:
      return state.merge({
        isPending: false,
        isAuthorized: false,
        isFailure: true,
      });
    default:
      return state;
  }
}

const reducer = (state = new Immutable.Map(), action) => {
  switch (action.type) {
    case AUTH_STATUS:
    case AUTH_REQUEST:
    case AUTH_FAILURE: {
      const newState = authReducer(state.get('auth'), action);
      return state.set('auth', newState);
    }
    default:
      return state;
  }
};
export default reducer;
