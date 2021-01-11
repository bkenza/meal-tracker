import axios from 'axios';

export const register = (user) => {
    let REGISTER_ENDPOINT = 'http://localhost:5000/users/add';
    try {
        let response = axios.post(REGISTER_ENDPOINT, user);
        if (response.status === 200) {
            return response.data;
        }
    }
    catch (e) {
        console.log('Error, user could not be registered.');
        console.log(e);
    }
}
