import React from 'react';
import PropType from 'prop-types';

const CustomTextArea = ({
  name, placeholder, value, error, touched, handleChange, handleBlur
}) => {
  return (
    <>
      <textarea
        className="textareaa"
        name={name}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        rows="10"
        required
      />
      <span className="error">{touched && error && error}</span>
    </>
  );
};
export default CustomTextArea;

CustomTextArea.defaultProps = {
  placeholder: '',
};

CustomTextArea.propTypes = {
  placeholder: PropType.string,
};
