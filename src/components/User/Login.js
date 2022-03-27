import { useFormik } from 'formik';
import { model, initialValues, Schema } from '../../forms/Auth';
import { CustomTextField } from '../../forms/Shared';

const { login: { formField: { email, password } } } = model;

const Login = () => {
  const {
    handleSubmit,
    isSubmitting,
    dirty,
    isValid,
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
          <button type="button">Login</button>
          <button type="button">Register</button>
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
          <CustomTextField type="email" name={email.name} placeholder="Email" />
        </div>
        <div className="field">
          <CustomTextField type="password" name={password.name} placeholder="Password" />
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
