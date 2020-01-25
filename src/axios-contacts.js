import axios from 'axios';

const axiosContacts = axios.create({
    baseURL: 'https://daria-ch-app.firebaseio.com/'
});

export default axiosContacts;