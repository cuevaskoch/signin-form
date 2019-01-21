import Immutable from 'immutable';
import api from '../../api';

const AUTHORIZATION_START = 'setup/auth/start';
export const startAuthorization = () => dispatch => {
  dispatch({ type: AUTHORIZATION_START });
  api.authenticate();
};

const reducer = (state = new Immutable.Map(), action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default reducer;
