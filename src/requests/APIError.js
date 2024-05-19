/* Ce fichiers contient les fonctions qui permettent de gérer les erreurs de l'API */

function diagnosticError(error) {
  if (navigator.onLine) {
    /* User is online */
    console.log('You are online');
  } else {
    /* User is offline */
    console.log('You are offline');
  }
}
