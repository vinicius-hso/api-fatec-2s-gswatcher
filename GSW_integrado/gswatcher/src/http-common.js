import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('@gswatcher:token'),
    "Content-type": "application/json"
  }
});

const http = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('@gswatcher:token'),
    "Content-type": "application/json"
  }
});

const auth = axios.create({
  baseURL: "http://localhost:3000/auth",
  headers: {    
    'Authorization': 'Bearer ' + localStorage.getItem('@gswatcher:token'),
    "Content-type": "application/json"
  }
});

export { http, auth }