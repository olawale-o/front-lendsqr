import * as Yup from 'yup';
import model from './model';

const {
  login: { formField: { email, password } },
  register: { formField: { firstName, lastName, registerEmail, registerPassword } },
} = model;

export default {
  loginSchema: () => Yup.object().shape({
    [email.name]: Yup.string().required(email.error.required).label(email.name),
    [password.name]: Yup.string().required(password.error.required).label(password.name),
  }),
  registerSchema: () => Yup.object().shape({
    [firstName.name]: Yup.string().required(firstName.error.required).label(firstName.name),
    [lastName.name]: Yup.string().required(lastName.error.required).label(lastName.name),
    [registerEmail.name]: Yup.string().required(registerEmail.error.required)
      .label(registerEmail.name),
    [registerPassword.name]: Yup.string().required(registerPassword.error.required)
      .label(registerPassword.name),
  }),
};
