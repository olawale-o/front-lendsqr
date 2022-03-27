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
          required: 'Firstname is required',
        },
      },
      lastName: {
        name: 'lastname',
        error: {
          required: 'Lastname is required',
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
  