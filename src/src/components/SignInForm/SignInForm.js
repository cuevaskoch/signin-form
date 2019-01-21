import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'informed';
import TextInput from './TextInput';

const required = value => value ? null : 'Required.';

const SignInForm = ({ onSubmit }) => (
  <div className="container">
    <Form id="signin-form" onSubmit={onSubmit}>
      <input autoComplete="false" name="hidden" type="text" style={{ display: 'none' }} />
      <TextInput
        field="firstName"
        label="First Name"
        validate={required}
      />
      <TextInput
        field="lastName"
        label="Last Name"
        validate={required}
      />
      <TextInput
        field="emailAddress"
        label="Email Address"
        validate={required}
      />
      <TextInput
        field="phoneNumber"
        label="Phone Number"
        validate={required}
      />
      <div className="btn-group">
        <button className="btn btn-primary" type="submit">Submit</button>
      </div>
      <div className="btn-group">
        <button className="btn btn-light" type="reset">Reset</button>
      </div>
    </Form>
  </div>
);

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
