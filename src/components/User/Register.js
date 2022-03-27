import { useFormik } from 'formik';
import PropType from 'prop-types';
import { model, initialValues, Schema } from '../../forms/Auth';
import { CustomTextField } from '../../forms/Shared';

const { register: { formField: { registerEmail, registerPassword, firstName, lastName } } } = model;

const Register = ({ isFocus }) => {
  const {
    handleSubmit,
    handleChange,
    isSubmitting,
    dirty,
    isValid,
    values,
  } = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: (values) => {},
  });

  return (
    <div className="signup__container">
      <form onSubmit={handleSubmit}>
        <h1>Getting Started</h1>
        <div className="switch-buttons">
        <button type="button" className={`switch-btn ${!isFocus ? 'active' : ''}`}>Login</button>
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
            name={lastName.name}
            type="text"
            onChange={handleChange}
            value={values.lastName}
            className="input"
            placeholder="Last Name"
            autoComplete="off"
          />
        </div>
        <div className="field">
          <input
            name={firstName.name}
            type="text"
            onChange={handleChange}
            value={values.lastName}
            className="input"
            placeholder="First name"
            autoComplete="off"
          />
        </div>
        <div className="field">
          <input
            name={registerEmail.name}
            type="email"
            onChange={handleChange}
            value={values.registerEmail}
            className="input"
            placeholder="Email"
            autoComplete="off"
          />
        </div>
        <div className="field">
          <input
            name={registerPassword.name}
            type="password"
            onChange={handleChange}
            value={values.registerPassword}
            className="input"
            placeholder="Password"
          />
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
};
