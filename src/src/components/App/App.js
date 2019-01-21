import React from 'react';
import PropTypes from 'prop-types';
import SignInForm from '../SignInForm';
import AuthorizeForm from '../AuthorizeForm';

const App = ({ isSetupComplete }) => {
  if (isSetupComplete) return <SignInForm />;
  return <AuthorizeForm />;
};

App.propTypes = {
  isSetupComplete: PropTypes.bool.isRequired,
};

export default App;
