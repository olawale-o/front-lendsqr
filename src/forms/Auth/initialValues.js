import model from './model';

const {
  login: { formField: { email, password } },
  register: { formField: { username, registerEmail, registerPassword } },
} = model;

export default {
  loginInitialValues: {
    [email.name]: '',
    [password.name]: '',
  },
  registerInitialValues: {
    [username.name]: '',
    [registerEmail.name]: '',
    [registerPassword.name]: '',
  },
};
