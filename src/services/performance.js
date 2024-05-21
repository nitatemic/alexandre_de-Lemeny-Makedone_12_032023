import requests from '../requests/requests';

/**
 * It fetches the performance data for a user with a given id
 * @param userID - The user's id
 * @returns An array of objects.
 */
export default async function getPerformance(userID) {
  try {
    const response = await requests(userID, 'performance');
    const data = await response.json();
    const result = data.data;
    const table = [];
    Object.keys(result.kind).forEach((type, index) => {
      table.push({
        Kind: result.kind[type],
        A: ((result.data[index]).value),
      });
    });
    return table;
  } catch (error) {
    throw new Error('There was a problem with the fetch operation');
  }
}
