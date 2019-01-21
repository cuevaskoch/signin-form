export const $hasSignedIn = state =>
  state.getIn(['signin', 'hasSignedIn'], false);
