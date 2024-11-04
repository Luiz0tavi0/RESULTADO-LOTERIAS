const { default: axios } = await import("axios");
const baseUrl = 'https://loteriascaixa-api.herokuapp.com/api/'
const apiClient = axios.create({baseURL: baseUrl})

export default apiClient;