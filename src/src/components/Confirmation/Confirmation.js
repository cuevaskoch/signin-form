import React from 'react';
import PropTypes from 'prop-types';

const Confirmation = ({
  isMemberInGoodStanding,
  onReset,
}) => (
  <div className="container">
    {isMemberInGoodStanding
      ? <p>You are in good standing.</p>
      : <p>You are not in good standing.</p>
    }
    <button className="btn btn-primary" onClick={onReset}>
      Sign in again
    </button>
  </div>
);

Confirmation.propTypes = {
  isMemberInGoodStanding: PropTypes.bool,
  onReset: PropTypes.func.isRequired,
};
Confirmation.defaultProps = {
  isMemberInGoodStanding: false,
}

export default Confirmation;
