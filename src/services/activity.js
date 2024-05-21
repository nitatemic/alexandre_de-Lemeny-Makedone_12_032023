import requests from '../requests/requests';

/**
 * It fetches the daily activity data for a user from the API and returns it
 * @param userID - The user's ID.
 * @returns An array of objects.
 */
export default async function getDailyActivity(userID) {
  try {
    const response = await requests(userID, 'activity');
    const data = await response.json();
    const result = data.data;
    const table = [];
    for (let i = 0; i < result.sessions.length; i += 1) {
      table.push({
        Jour: new Date(result.sessions[i].day).getDate(),
        Poids: result.sessions[i].kilogram,
        Calories: (result.sessions[i].calories),
      });
    }
    return table;
  } catch (error) {
    throw new Error('There was a problem with the fetch operation');
  }
}
