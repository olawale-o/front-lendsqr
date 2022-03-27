import { useFormik } from 'formik';
import PropType from 'prop-types';
import { model, initialValues, Schema } from '../../forms/Auth';

const { login: { formField: { email, password } } } = model;

const Login = ({ isFocus }) => {
  const {
    handleChange,
    handleSubmit,
    isSubmitting,
    dirty,
    isValid,
    values,
  } = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: (values) => {},
  });
  return(
    <div className="login__container">
      <form onSubmit={handleSubmit}>
      <h1>Welcome back</h1>
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
            name={email.name}
            type="email"
            onChange={handleChange}
            value={values.lastName}
            className="input"
            placeholder="Email"
            autoComplete="off"
          />
        </div>
        <div className="field">
          <input
            name={password.name}
            type="password"
            onChange={handleChange}
            value={values.password}
            className="input"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="auth-btn"
          disabled={isSubmitting || !(dirty && isValid)}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;


Login.propTypes = {
  isFocus: PropType.bool.isRequired,
};
