export let API = './mocks/';

/* This code block is checking if the current environment is set to "production". If it is, then it
sets the value of the `API` variable to `'http://localhost:3000/'`. This is used to switch
between different API endpoints depending on whether the code is running in a development or
production environment. */
if (process.env.NODE_ENV === 'production') {
  API = 'http://localhost:3000/';
}
