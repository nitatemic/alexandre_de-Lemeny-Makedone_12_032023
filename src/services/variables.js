let API;
if (import.meta.env.VITE_USE_MOCKS === 'true') {
  API = import.meta.env.VITE_MOCKS_LOCATION;
} else if (import.meta.env.VITE_USE_MOCKS === 'false') {
  API = import.meta.env.VITE_BACKEND_URL;
} else {
  console.error('Erreur ENV')
}

export { API };
