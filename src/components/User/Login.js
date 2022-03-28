import { useFormik } from 'formik';
import PropType from 'prop-types';
import { model, initialValues, Schema } from '../../forms/Auth';
import { CustomTextField } from '../../forms/Shared';

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
          <CustomTextField
            name={email.name}
            type="email"
            placeholder="Email"
            value={values.email}
            error={errors.email}
            touched={touched.email}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
        <div className="field">
          <CustomTextField
            name={password.name}
            type="password"
            placeholder="Password"
            value={values.password}
            error={errors.password}
            touched={touched.password}
            handleChange={handleChange}
            handleBlur={handleBlur}
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
  onActive: PropType.func.isRequired,
};
