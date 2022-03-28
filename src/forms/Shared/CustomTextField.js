import React from 'react';
import PropType from 'prop-types';

const CustomTextField = ({
  type, name, placeholder, value, error, touched, handleChange, handleBlur
}) => {
  return (
    <>
      <input
        type={type}
        className="input"
        name={name}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        autoComplete="off"
        required
      />
      <span className="form__error">{touched && error && error}</span>
    </>
  );
};
export default CustomTextField;

CustomTextField.defaultProps = {
  placeholder: '',
};

CustomTextField.propTypes = {
  type: PropType.string.isRequired,
  placeholder: PropType.string,
};
