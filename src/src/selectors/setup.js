import { createSelector } from 'reselect';

export const $isAuthorizationPending = state =>
state.getIn(['setup', 'auth', 'isPending'], false);

export const $isAuthorized = state =>
state.getIn(['setup', 'auth', 'isAuthorized'], false);

export const $isSetupComplete = createSelector(
  $isAuthorized,
  isAuthorized => isAuthorized
);
