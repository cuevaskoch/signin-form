import React from 'react';
import PropTypes from 'prop-types';
import SignInForm from '../SignInForm';
import AuthorizeForm from '../AuthorizeForm';

const App = ({ isAuthorized }) => {
  if (isAuthorized) return <SignInForm />;
  return <AuthorizeForm />;
};

App.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
};

export default App;
