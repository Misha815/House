import axios from 'axios';

const baseURL = './src/assets/data/users.json';

const jsonService = axios.create({
    baseURL,
});

export default jsonService;