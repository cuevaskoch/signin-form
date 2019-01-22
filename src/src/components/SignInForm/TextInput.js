import React from 'react';
import PropTypes from 'prop-types';
import { Text, withFormState } from 'informed';

const TextInput = ({ field, formState, label, validate }) => {
  const { errors } = formState;
  const errorText = errors[field];
  const hasError = typeof errorText !== 'undefined';

  let cssClass = 'form-control form-control-lg';
  if (hasError) cssClass += ' is-invalid';

  return (
    <div className="form-group">
      <label htmlFor={field}>{label}</label>
      <Text
        className={cssClass}
        autoComplete="off"
        field={field}
        id={field}
        validate={validate}
        validateOnBlur
      />
      {hasError
        ? <div class="invalid-feedback">{errorText}</div>
        : null
      }
    </div>
  );
};

TextInput.propTypes = {
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validate: PropTypes.func,
};

export default withFormState(TextInput);
