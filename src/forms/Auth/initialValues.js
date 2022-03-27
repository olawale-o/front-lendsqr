import model from './model';

const {
  login: { formField: { email, password } },
  register: { formField: { firstName, lastName, registerEmail, registerPassword } },
} = model;

export default {
  loginInitialValues: {
    [email.name]: '',
    [password.name]: '',
  },
  registerInitialValues: {
    [firstName.name]: '',
    [lastName.name]: '',
    [registerEmail.name]: '',
    [registerPassword.name]: '',
  },
};
