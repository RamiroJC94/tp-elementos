import axios from 'axios'

axios.defaults.baseURL = "https://api.thecatapi.com/v1/images/search";
axios.defaults.timeout = 10000;

const request = (type, path, body) =>
  axios
    .request({ url: path, method: type, data: body })
    .then(response => response.data)
    .catch(error => Promise.reject(error.response.data));

const api ={
    getCats:()=> request('get')

}

export default api;
