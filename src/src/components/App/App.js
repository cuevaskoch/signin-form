import React from 'react';
import PropTypes from 'prop-types';

import SignInForm from '../SignInForm';
import AuthorizeForm from '../AuthorizeForm';
import Confirmation from '../Confirmation';

const App = ({ hasSignedIn, isSetupComplete }) => {
  if (hasSignedIn) return <Confirmation />;
  if (isSetupComplete) return <SignInForm />;
  return <AuthorizeForm />;
};

App.propTypes = {
  hasSignedIn: PropTypes.bool.isRequired,
  isSetupComplete: PropTypes.bool.isRequired,
};

export default App;
