import { useFormik } from 'formik';
import PropType from 'prop-types';
import { model, initialValues, Schema } from '../../forms/Auth';
import { CustomTextField } from '../../forms/Shared';

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
          <CustomTextField
            name={firstName.name}
            type="text"
            placeholder="First Name"
            value={values.firstname}
            error={errors.firstname}
            touched={touched.firstname}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
        <div className="field">
          <CustomTextField
            name={lastName.name}
            type="text"
            placeholder="Last Name"
            value={values.lastname}
            error={errors.lastname}
            touched={touched.lastname}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
        <div className="field">
          <CustomTextField
            name={registerEmail.name}
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
            name={registerPassword.name}
            type="password"
            placeholder="password"
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
