/**
 * It fetches a user from the API and returns the response as JSON
 * @param id - The id of the user you want to get.
 * @returns The response from the fetch request.
 */

import { API } from './variables';

export default async function getUser(id) {
  const response = await fetch(`${API}user/${id}`);
  const data = await response.json();
  return data.data;
}

export async function getUserGoalCompletion(id) {
  const response = await fetch(`${API}user/${id}`);
  const data = await response.json();
  const score = data.data;
  return score.score;
}
