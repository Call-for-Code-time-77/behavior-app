import axios from 'axios';

const api = axios.create({
	baseURL: 'https://hackathon-behavior.mybluemix.net/',
});

export default api;
