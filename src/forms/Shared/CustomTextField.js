import React from 'react';
import { useField } from 'formik';
import PropType from 'prop-types';

const CustomTextField = ({
  type, placeholder, ...props
}) => {
  const [field, meta] = useField(props);
  const {
    name, onBlur, onChange, value,
  } = field;
  return (
    <>
      <input
        type={type}
        className="input"
        name={name}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        autoComplete="off"
        required
      />
      <div className="field__error">{meta.touched && meta.error && meta.error}</div>
    </>
  );
};
export default CustomInput;

CustomTextField.defaultProps = {
  placeholder: '',
};

CustomTextField.propTypes = {
  type: PropType.string.isRequired,
  placeholder: PropType.string,
};
