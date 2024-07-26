import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8000/api',  // endpoint for Django REST API
    headers: {
        'Content-Type': 'application/json',
    },
});
