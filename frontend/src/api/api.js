import axios from 'axios'


axios.defaults.baseURL = "http://localhost:7000";
axios.defaults.timeout = 10000; // 10s
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers={'Access-Control-Allow-Origin': '*'}

const request = (type, path, body) =>
  axios
    .request({ url: path, method: type, data: body })
    .then(response => response.data)
    .catch(error => Promise.reject(error.response.data));

const api ={
    updateMovie:(body)=> request('put','/updateMovies',body),
    createMovie:(body)=> request('post',`/addMovies`,body),
    getMovies:()=> request('get', '/movies'), 
    login:(body) => request('post',`/users/login`,body),
    search:(title)=>request('get','/search/?titulo='+title),
    signIn:(body)=>request('post','/user',body),
    createComment:(body)=>request('post','/movie/comment',body),
    getComments:(title)=>request('get','/movie/comments/?titulo='+title),
    searchUser:(body)=>request('get','/user',body),
    changePasswordUser:(body)=> request('put','/updatePasswordUser',body),
    changeHistoryMovie:(body)=> request('post','/user/AddHistory', body),
}

export default api;
