import axios from 'axios';

export default axios.create({
    // baseURL: 'http://localhost:8000/api',  // endpoint for Django REST API
    baseURL: 'https://8jz-talented-mendel.circumeo-apps.net/api',  // endpoint for Django REST API
    headers: {
        'Content-Type': 'application/json',
    },
});
