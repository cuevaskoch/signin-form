import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'informed';

const TextInput = ({
  field,
  label,
  validate,
}) => (
  <div className="form-group">
    <label htmlFor={field}>{label}</label>
    <Text
      className="form-control form-control-lg"
      autoComplete="off"
      field={field}
      id={field}
      validate={validate}
      validateOnBlur
    />
  </div>
);

TextInput.propTypes = {
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validate: PropTypes.func,
};

export default TextInput;
