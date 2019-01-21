import React, { Component } from 'react';
import api from '../../api';

import Loading from './Loading';
import SignInForm from './SignInForm';


class SignInFormContainer extends Component {
  constructor() {
    super();
    this.state = { isLoading: false };
  }

  onSubmit = (formValues) => {
    console.log('formValues', formValues);
    api.signIn.log(formValues);
  }

  onSubmitError = () => {
    // TODO: display what the error was.  Probably validating the email address.
    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    return <SignInForm onSubmit={this.onSubmit} />;
  }
}

export default SignInFormContainer;
