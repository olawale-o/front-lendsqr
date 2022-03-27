export default {
  name: 'auth',
  login: {
    formField: {
      email: {
        name: 'email',
        error: {
          required: 'Email is required',
        },
      },
      password: {
        name: 'password',
        error: {
          required: 'Password is required',
        },
      },
    },
  },
  register: {
    formField: {
      registerEmail: {
        name: 'email',
        error: {
          required: 'Email is required',
        },
      },
      firstName: {
        name: 'firstname',
        error: {
          required: 'First name is required',
        },
      },
      lastName: {
        name: 'lastname',
        error: {
          required: 'Last name is required',
        },
      },
      registerPassword: {
        name: 'password',
        error: {
          required: 'Password is required',
        },
      },
    },
  },
};
  