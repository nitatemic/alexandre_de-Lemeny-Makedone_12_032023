import requests from '../requests/requests';

/**
 * It fetches the average number of sessions for a user from the API
 * @param userID - The user's ID
 * @returns The average number of sessions per day for the user.
 */
export default async function getAverageSessions(userID) {
  function getDay(date) {
    switch (date) {
      case 1:
        return 'L';
      case 2:
        return 'M';
      case 3:
        return 'M';
      case 4:
        return 'J';
      case 5:
        return 'V';
      case 6:
        return 'S';
      case 7:
        return 'D';
      default:
        return 'Erreur';
    }
  }

  try {
    const response = await requests(userID, 'averageSessions');
    const data = await response.json();
    const result = data.data;
    const table = [];
    for (let i = 0; i < result.sessions.length; i += 1) {
      table.push({
        Jour: getDay(result.sessions[i].day),
        Duree: (result.sessions[i].sessionLength),
      });
    }
    return table;
  } catch (error) {
    throw new Error('There was a problem with the fetch operation');
  }
}
