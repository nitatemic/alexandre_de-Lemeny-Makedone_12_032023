export let API = './mocks/';

if (process.env.NODE_ENV === 'production') {
  API = 'http://localhost:3000/';
}
