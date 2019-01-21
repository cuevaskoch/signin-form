import React from 'react';
import PropTypes from 'prop-types';

const AuthorizeForm = ({
  isAuthorizationPending,
  requestAuthorization,
}) => (
    <div className="container">
      {isAuthorizationPending
        ? (
          <p>Requesting authorization...</p>
        )
        : (
          <React.Fragment>
            <p>Click "Authorize" to get started.</p>
            <button className="btn btn-primary" onClick={requestAuthorization}>Authorize</button>
          </React.Fragment>
        )}
    </div>
  );

AuthorizeForm.propTypes = {
  isAuthorizationPending: PropTypes.bool.isRequired,
  requestAuthorization: PropTypes.func.isRequired,
};

export default AuthorizeForm;
