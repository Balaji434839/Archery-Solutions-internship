import axios from 'axios'

const api = axios.create({
    baseURL : `http://localhost:5000/api/v1/userLogin` ,
    withCredentials : true,
    headers: {
        'Content-Type': 'application/json',
}
});

export default api ;


// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'https://api.example.com',
//   timeout: 5000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export default axiosInstance;
