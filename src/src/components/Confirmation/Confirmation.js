import React from 'react';
import PropTypes from 'prop-types';

import InGoodStanding from './InGoodStanding';
import NotInGoodStanding from './NotInGoodStanding';
import Pending from './Pending';

const getControl = (isInGoodStandingPending, isInGoodStanding, onReset) => {
  if (isInGoodStandingPending) return <Pending />;
  return (
    <React.Fragment>
      {isInGoodStanding ? <InGoodStanding /> : <NotInGoodStanding />}
      <button className="btn btn-primary" onClick={onReset}>
        Return to Sign In Form
      </button>
    </React.Fragment>
  );
};

const Confirmation = ({
  isInGoodStandingPending,
  isInGoodStanding,
  onReset,
}) => (
  <div className="container">
    {getControl(isInGoodStandingPending, isInGoodStanding, onReset)}
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
