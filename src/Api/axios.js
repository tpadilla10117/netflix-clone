import axios from 'axios';
require('dotenv').config();

const token = process.env.REACT_APP_TMBD_TOKEN;

/* console.log("I'm getting back my token:", token) */

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    header: { 'Authorization': `Bearer ${token}`}
});

export default instance;