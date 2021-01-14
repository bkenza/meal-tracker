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

export const login = async (user) => {
    let LOGIN_ENDOPOINT = 'http://localhost:5000/users/login';
    try {
        let response = await axios.post(LOGIN_ENDOPOINT, user);
        if (response.status === 200 && response.data.success) {
            localStorage.setItem('username', user.username);
            localStorage.setItem('token', response.data.token);
            return response.data;
        }
    }
    catch (e) {
        console.log('Login error');
        console.log(e);
    }
}

export const logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
}
