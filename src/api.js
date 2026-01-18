// import axios from 'axios';

// const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// // Add a token to every request if it exists
// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('token')) {
//     req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//   }
//   return req;
// });

// export default API;



import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// 1. Request Interceptor: Adds the token to every outgoing request
API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

// 2. Response Interceptor: Handles security failures (New Addition)
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // If the backend says "Unauthorized" (401), it means the token is bad/expired
    if (error.response && error.response.status === 401) {
      // Clear local storage
      localStorage.removeItem('token');
      localStorage.removeItem('skillUser');
      
      // Force redirect to login page
      window.location.href = '/login'; 
    }
    return Promise.reject(error);
  }
);

export default API;