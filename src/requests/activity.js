/**
 * It fetches the daily activity data for a user from the API and returns it
 * @param userID - the user's ID
 * @returns An array of objects.
 */
const API = 'http://localhost:3000/';

export default async function getDailyActivity(userID) {
  const response = await fetch(`${API}user/${userID}/activity`);
  const data = await response.json();
  return data.data;
}
