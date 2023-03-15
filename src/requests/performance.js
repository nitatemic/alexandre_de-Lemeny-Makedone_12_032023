import { API } from './variables';

/**
 * It fetches the performance data for a user with a given id
 * @param id - The user's id
 * @returns An array of objects.
 */
export default async function getPerformance(id) {
  const response = await fetch(`${API}user/${id}/performance/`);
  const data = await response.json();
  return data.data;
}
