import { API } from './variables';

/**
 * It fetches the average number of sessions for a user from the API
 * @param userID - The user's ID
 * @returns The average number of sessions per day for the user.
 */
export default async function getAverageSessions(userID) {
  let response;
  if (process.env.NODE_ENV === 'production') {
    response = await fetch(`${API}user/${userID}/average-sessions`);
  } else {
    response = await fetch(`${API}user/${userID}/average-sessions.json`);
  }
  const data = await response.json();
  return data.data;
}
