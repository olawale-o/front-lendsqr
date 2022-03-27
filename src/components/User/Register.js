import { useFormik } from 'formik';
import { model, initialValues, Schema } from '../../forms/Auth';
import { CustomTextField } from '../../forms/Shared';

const { register: { formField: { registerEmail, registerPassword, firstName, lastName } } } = model;

const Register = () => {
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

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <h1>Getting Started</h1>
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
          <CustomTextField type="text" name={firstName.name} placeholder="First Name" />
        </div>
        <div className="field">
          <CustomTextField type="text" name={lastName.name} placeholder="Last Name" />
        </div>
        <div className="field">
          <CustomTextField type="email" name={registerEmail.name} placeholder="Email" />
        </div>
        <div className="field">
          <CustomTextField type="password" name={registerPassword.name} placeholder="Password" />
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
