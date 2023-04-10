import { API } from './variables';

/**
 * It fetches the daily activity data for a user from the API and returns it
 * @param userID - The user's ID.
 * @returns An array of objects.
 */
export default async function getDailyActivity(userID) {
  let response;
  if (process.env.NODE_ENV === 'production') {
    response = await fetch(`${API}user/${userID}/activity`);
  } else {
    response = await fetch(`${API}user/${userID}/activity.json`);
  }
  const data = await response.json();
  return data.data;
}
