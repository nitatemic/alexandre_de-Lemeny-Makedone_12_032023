import requests from '../requests/requests';

/**
 * This is an asynchronous function that retrieves user data from an API endpoint,
 * with different URLs depending on the environment.
 * @param userID - The `id` parameter is a unique identifier for the user whose data is being requested.
 * It is used to construct the URL for the API endpoint that will be called to retrieve the user data.
 * @returns the `data` property of the JSON response obtained from the API endpoint.
 */
export default async function getUser(userID) {
  const response = await requests(userID, 'user');
  const data = await response.json();
  return data.data;
}

/**
 * @param userID - The parameter `id` is a unique identifier for a user,
 * which is used to fetch their data from an API.
 * @returns the `score` property of the `data` object obtained from the API response for the user
 * with the specified `id`.
 */
export async function getUserGoalCompletion(userID) {

  try {
    const response = await requests(userID, 'user');
    const data = await response.json();
    const score = data.data;
    let result = null;
    /* If score.todayScore exists, we store it in result, otherwise we store score.score */
    if (score.todayScore) {
      result = score.todayScore;
    } else {
      result = score.score;
    }
    const goalValue = result * 100;
    const RemainingValue = 100 - goalValue;

    return [
      {
        name: 'Goal',
        value: goalValue,
      },
      {
        name: 'Remaining',
        value: RemainingValue,
      },
    ];
  } catch (error) {
    throw new Error('There was a problem with the fetch operation');
  }
}
