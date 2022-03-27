import { useFormik } from 'formik';
import PropType from 'prop-types';
import { model, initialValues, Schema } from '../../forms/Auth';

const { login: { formField: { email, password } } } = model;
const { loginSchema } = Schema;
const { loginInitialValues } = initialValues;

const Login = ({ isFocus, onActive }) => {
  const onReset = (resetForm) => {
    if (!isFocus) {
      resetForm();
    }
    onActive();
  };
  const {
    handleChange,
    handleSubmit,
    handleReset,
    handleBlur,
    isSubmitting,
    dirty,
    isValid,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {},
  });
  return(
    <div className="login__container">
      <form onSubmit={handleSubmit}>
      <h1>Welcome back</h1>
        <div className="switch-buttons">
          <button type="button" className={`switch-btn ${!isFocus ? 'active' : ''}`}>Login</button>
          <button type="button" className={`switch-btn ${isFocus ? 'active' : ''}`} onClick={() => onReset(handleReset)}>Register</button>
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
            onBlur={handleBlur}
            value={values.email}
            className="input"
            placeholder="Email"
            autoComplete="off"
          />
          {touched.email && errors.email && <span>{errors.email}</span>}
        </div>
        <div className="field">
          <input
            name={password.name}
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
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
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;


Login.propTypes = {
  isFocus: PropType.bool.isRequired,
  onActive: PropType.func.isRequired,
};
