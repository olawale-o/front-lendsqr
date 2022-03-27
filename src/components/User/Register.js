import { useFormik } from 'formik';
import PropType from 'prop-types';
import { model, initialValues, Schema } from '../../forms/Auth';

const { register: { formField: { registerEmail, registerPassword, firstName, lastName } } } = model;
const { registerSchema } = Schema;
const { registerInitialValues } = initialValues;

const Register = ({ isFocus, onActive }) => {
  const onReset = (resetForm) => {
    if (!isFocus) {
      resetForm();
    }
    onActive();
  };
  const {
    handleSubmit,
    handleChange,
    handleReset,
    handleBlur,
    isSubmitting,
    dirty,
    isValid,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: registerInitialValues,
    validationSchema: registerSchema,
    onSubmit: (values) => {},
  });

  return (
    <div className="signup__container">
      <form onSubmit={handleSubmit}>
        <h1>Getting Started</h1>
        <div className="switch-buttons">
          <button type="button" className={`switch-btn ${!isFocus ? 'active' : ''}`} onClick={() => onReset(handleReset)}>Login</button>
          <button type="button" className={`switch-btn ${isFocus ? 'active' : ''}`}>Register</button>
        </div>
        <div className="continue-with">
          <button type="button" className="google">Google</button>
          <button type="button" className="facebook">Facebook</button>
        </div>
        <div className="or">
          <span className="left" />
          <span className="text">or</span>
          <span className="right" />
        </div>
        <div className="field">
          <input
            name={firstName.name}
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
            className="input"
            placeholder="First name"
            autoComplete="off"
          />
          {touched.firstname && errors.firstname && <span>{errors.firstname}</span>}
        </div>
        <div className="field">
          <input
            name={lastName.name}
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
            className="input"
            placeholder="Last Name"
            autoComplete="off"
          />
          {touched.lastname && errors.lastname && <span>{errors.lastname}</span>}
        </div>
        <div className="field">
          <input
            name={registerEmail.name}
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.registerEmail}
            className="input"
            placeholder="Email"
            autoComplete="off"
          />
          {touched.email && errors.email && <span>{errors.email}</span>}
        </div>
        <div className="field">
          <input
            name={registerPassword.name}
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.registerPassword}
            className="input"
            placeholder="Password"
          />
          {touched.password && errors.password && <span>{errors.password}</span>}
        </div>
        <button
          type="submit"
          className="auth-btn"
          disabled={isSubmitting || !(dirty && isValid)}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Register;

Register.propTypes = {
  isFocus: PropType.bool.isRequired,
  onActive: PropType.func.isRequired,
};
