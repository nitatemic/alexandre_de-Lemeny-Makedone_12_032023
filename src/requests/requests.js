import { API } from '../services/variables.js';

export default function requests(userID, type) {
  let URL;
  try {
    switch (type) {
      case 'user':
        URL = `${API}user/${userID}`;
        break;
      case 'performance':
        URL = `${API}user/${userID}/performance`;
        break;
      case 'activity':
        URL = `${API}user/${userID}/activity`;
        break;
      case 'averageSessions':
        URL = `${API}user/${userID}/average-sessions`;
        break;
      default:
        throw new Error('Invalid request type');
    }
  } catch (error) {
    console.error(error);
  }

  /* If the environment variable NODE_ENV is equal to 'production'
  and the environment variable PAGE is equal to undefined or false,
  then we return the request fetch(URL). Otherwise, we return the request fetch(URL.json). */
  return process.env.NODE_ENV === 'production' ? fetch(URL) : fetch(`${URL}.json`);
}
