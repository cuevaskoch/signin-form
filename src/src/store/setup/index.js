import Immutable from 'immutable';
import api from '../../api';

const AUTHORIZATION_REQUEST = 'setup/auth/request';
const AUTHORIZATION_STATUS = 'setup/auth/status';
const AUTHORIZATION_FAILURE = 'setup/auth/failure';

const authorizationStatus = (authStatus) => ({
  type: AUTHORIZATION_STATUS,
  payload: { authStatus },
 });

const authorizationFailure = (error) => ({
  type: AUTHORIZATION_FAILURE,
  payload: { error },
});

export const requestAuthorization = () => (dispatch) => {
  dispatch({ type: AUTHORIZATION_REQUEST });

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
    case AUTHORIZATION_REQUEST:
      return state.merge({
        isPending: true,
        isAuthorized: false,
        isFailure: false,
      });
    case AUTHORIZATION_STATUS:
      return state.merge({
        isPending: false,
        isAuthorized: action.payload.authStatus,
        isFailure: false,
      });
    case AUTHORIZATION_FAILURE:
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
    case AUTHORIZATION_STATUS:
    case AUTHORIZATION_REQUEST:
    case AUTHORIZATION_FAILURE: {
      const newState = authReducer(state.get('auth'), action);
      return state.set('auth', newState);
    }
    default:
      return state;
  }
};
export default reducer;
