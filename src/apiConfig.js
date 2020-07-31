let apiUrl
const apiUrls = {
  production: 'http://localhost:3000/',
  development: 'https://rickandmortyapi.com/api/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
