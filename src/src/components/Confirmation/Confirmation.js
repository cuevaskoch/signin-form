import React from 'react';
import PropTypes from 'prop-types';

import InGoodStanding from './InGoodStanding';
import NotInGoodStanding from './NotInGoodStanding';
import Pending from './Pending';

const getControl = (isInGoodStandingPending, isInGoodStanding) => {
  if (isInGoodStandingPending) return <Pending />;
  if (isInGoodStanding) return <InGoodStanding />;
  return <NotInGoodStanding />;
};

const Confirmation = ({
  isInGoodStandingPending,
  isInGoodStanding,
  onReset,
}) => (
  <div className="container">
    {getControl(isInGoodStandingPending, isInGoodStanding)}
    <button className="btn btn-primary" onClick={onReset}>
      Sign in again
    </button>
  </div>
);

Confirmation.propTypes = {
  isInGoodStandingPending: PropTypes.bool,
  isInGoodStanding: PropTypes.bool,
  onReset: PropTypes.func.isRequired,
};
Confirmation.defaultProps = {
  isMemberInGoodStanding: false,
}

export default Confirmation;
