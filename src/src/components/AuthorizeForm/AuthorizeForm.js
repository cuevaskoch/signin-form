import React from 'react';
import PropTypes from 'prop-types';

const AuthorizeForm = ({
  isAuthorizationPending,
  requestAuthorization,
}) => (
    <div className="container">
      {isAuthorizationPending
        ? (
          <React.Fragment>
            <h2>Signing in to Google</h2>
            <p>Google's login form should appear in a popup window now.</p>
            <p>
              If your browser is set to block popups, please unblock them and refresh this page
              to start over.
            </p>
          </React.Fragment>
        )
        : (
          <React.Fragment>
            <h2>Let's get set up</h2>
            <p>
              The first thing we need to do is sign in to Google so that we can access membership
              records and keep track of who's signed in.
            </p>
            <p>Click below to get started.</p>
            <button className="btn btn-primary" onClick={requestAuthorization}>Sign in to Google</button>
          </React.Fragment>
        )}
    </div>
  );

AuthorizeForm.propTypes = {
  isAuthorizationPending: PropTypes.bool.isRequired,
  requestAuthorization: PropTypes.func.isRequired,
};

export default AuthorizeForm;
