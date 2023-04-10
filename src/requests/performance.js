import { API } from './variables';

/**
 * It fetches the performance data for a user with a given id
 * @param id - The user's id
 * @returns An array of objects.
 */
export default async function getPerformance(id) {
  let response;
  if (process.env.NODE_ENV === 'production') {
    response = await fetch(`${API}user/${id}/performance`);
  } else {
    response = await fetch(`${API}user/${id}/performance.json`);
  }
  const data = await response.json();
  return data.data;
}
