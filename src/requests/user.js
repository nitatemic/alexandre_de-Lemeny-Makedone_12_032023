import { API } from './variables';

/**
 * This is an asynchronous function that retrieves user data from an API endpoint,
 * with different URLs depending on the environment.
 * @param id - The `id` parameter is a unique identifier for the user whose data is being requested.
 * It is used to construct the URL for the API endpoint that will be called to retrieve the user data.
 * @returns the `data` property of the JSON response obtained from the API endpoint.
 */
export default async function getUser(id) {
  let response;
  if (process.env.NODE_ENV === 'production') {
    response = await fetch(`${API}user/${id}`);
  } else {
    response = await fetch(`${API}user/${id}.json`);
  }
  const data = await response.json();
  return data.data;
}

/**
 * @param id - The parameter `id` is a unique identifier for a user,
 * which is used to fetch their data from an API.
 * @returns the `score` property of the `data` object obtained from the API response for the user
 * with the specified `id`.
 */
export async function getUserGoalCompletion(id) {
  let response;
  if (process.env.NODE_ENV === 'production') {
    response = await fetch(`${API}user/${id}`);
  } else {
    response = await fetch(`${API}user/${id}.json`);
  }
  const data = await response.json();
  const score = data.data;
  return score.score;
}
