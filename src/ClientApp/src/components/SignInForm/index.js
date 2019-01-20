import React, { Component } from 'react';
import Loading from './Loading';
import SignInForm from './SignInForm';

class SignInFormContainer extends Component {
  constructor() {
    super();
    this.state = { isLoading: false };
  }

  onSubmit = (formValues) => {
    this.setState({ isLoading: true });
    fetch('api/sign-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues),
    })
    .then(response => response.json())
    .then(response => {
      if (response.isInGoodStanding) {
        this.props.history.push('/dues-paid');
      } else {
        this.props.history.push('/unknown-email');
      }
    })
    .catch(this.onSubmitError);
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
