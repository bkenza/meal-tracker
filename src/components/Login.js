import React, { useState } from 'react';
import loginImg from '../images/loginImg.svg';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { login } from '../middleware/userRequests';

function Login (props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleClick = async () => {
        let userInfo = {
            username,
            password
        }

        let response = await login(userInfo);
        if (response) {
            props.history.push('/dashboard');
        }

    }

    return (
        <div className='login-base-container' >
            <div className='login-header'>Login</div>
            <div className='login-content'>
                <div className='login-img'>
                    <img src={loginImg} alt='img' />

                </div>
                <div className='login-form'>
                    <div className='login-form-group'>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={username} onChange={onChangeUsername} placeholder="username" />
                    </div>
                    <div className="login-form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={password} onChange={onChangePassword} placeholder="password" />
                    </div>

                </div>
            </div>
            <div className="login-form-footer">
                <Button size='large' id='get-started-btn' variant='contained' onClick={handleClick}>Login</Button>

            </div>

        </div>
    )
}

export default withRouter(Login);