import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Confirmation = ({ isMemberInGoodStanding }) => (
  <div>
    {isMemberInGoodStanding
      ? <p>You are in good standing.</p>
      : <p>You are not in good standing.</p>
    }
    <Link to="/">Sign in again.</Link>
  </div>
);

Confirmation.propTypes = {
  isMemberInGoodStanding: PropTypes.bool,
};
Confirmation.defaultProps = {
  isMemberInGoodStanding: false,
}

export default Confirmation;
