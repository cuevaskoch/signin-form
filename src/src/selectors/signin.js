export const $hasSignedIn = state =>
  state.getIn(['signin', 'hasSignedIn'], false);

export const $isInGoodStandingPending = state =>
  state.getIn(['signin', 'isInGoodStandingPending'], false);

export const $isInGoodStanding = state =>
  state.getIn(['signin', 'isInGoodStanding'], false);
