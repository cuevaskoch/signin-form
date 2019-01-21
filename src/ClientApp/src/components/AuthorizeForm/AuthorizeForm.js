import React from 'react';
import PropTypes from 'prop-types';

const AuthorizeForm = ({ startAuthorization }) => (
  <div className="container">
    <p>Click "Authorize" to get started.</p>
    <button className="btn btn-primary" onClick={startAuthorization}>Authorize</button>
  </div>
);

AuthorizeForm.propTypes = {
  startAuthorization: PropTypes.func.isRequired,
};

export default AuthorizeForm;
