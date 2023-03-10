/**
 * It fetches a user from the API and returns the response as JSON
 * @param id - The id of the user you want to get.
 * @returns The response from the fetch request.
 */

const API = 'http://localhost:3000/';

export default async function getUser(id) {
  const response = await fetch(`${API}user/${id}`);
  const data = await response.json();
  return data.data;
}
