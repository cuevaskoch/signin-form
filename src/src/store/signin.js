import Immutable from 'immutable';
import api from '../api';

const CLEAR = 'signin/clear';
const REQUEST = 'signin/request';
const STATUS = 'signin/status';

const setStatus = (payload) => ({ type: STATUS, payload });
export const clearSignIn = () => ({ type: CLEAR });

export const logSignIn = formValues => dispatch => {
  dispatch({ type: REQUEST });
  api.signin.log(formValues)
    .then(() => {
      dispatch(setStatus({
        hasSignedIn: true,
        isInGoodStandingPending: true,
      }));
      return api.signin.getIsInGoodStanding(formValues);
    })
    .then((isInGoodStanding) => {
      dispatch(setStatus({
        isInGoodStandingPending: false,
        isInGoodStanding,
      }));
    });
};

const emptyState = new Immutable.Map();
const signingInState = new Immutable.Map({
  isPending: true,
});
const reducer = (state = emptyState, action) => {
  switch (action.type) {
    case STATUS:
      return state.merge(action.payload);
    case REQUEST:
      return signingInState;
    case CLEAR:
      return emptyState;
    default:
      return state;
  }
};

export default reducer;
