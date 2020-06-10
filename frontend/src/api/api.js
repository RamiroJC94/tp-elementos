import axios from 'axios'


axios.defaults.baseURL = "http://localhost:7000";
axios.defaults.timeout = 10000; // 10s
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers={'Access-Control-Allow-Origin': '*'}

const request = (type, path, body) =>
  axios
    .request({ url: path, method: type, data: body })
    .then(response => response.data)
    .catch(error => {console.log(error.toJSON())
    Promise.reject(error)});

const api ={
    getMovies:()=> request('get', '/movies'),
//   getMovies:()=>axios.get('http://localhost:7000/movies')
//   .then(response=>response.data)
//   .catch(error=>console.log(error)),  
   login:(body) => request('post',`/users/login`,body)
}

export default api;
