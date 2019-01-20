import React from 'react';
import PropTypes from 'prop-types';
import { Form, Text } from 'informed';

const required = value => value ? null : 'Required.';

const SignInForm = ({ onSubmit }) => (
  <Form id="signin-form" onSubmit={onSubmit}>
    <input autoComplete="false" name="hidden" type="text" style={{ display: 'none' }} />
    <div>
      <label htmlFor="first-name">First name:</label>
      <Text autoComplete="off" field="firstName" id="first-name" validate={required} validateOnBlur />
    </div>

    <div>
      <label htmlFor="last-name">Last name:</label>
      <Text autoComplete="off" field="lastName" id="last-name" validate={required} validateOnBlur />
    </div>

    <div>
      <label htmlFor="email-address">Email Address:</label>
      <Text autoComplete="off" field="emailAddress" id="email-address" validate={required} validateOnBlur />
    </div>
    <div>
      <label htmlFor="phone-number">Phone number:</label>
      <Text autoComplete="off" field="phoneNumber" id="phone-number" validate={required} validateOnBlur />
    </div>
    <button type="submit">Submit</button>
  </Form>
);

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
