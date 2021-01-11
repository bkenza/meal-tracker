import React, { useState } from 'react';
import loginImg from '../images/loginImg.svg';
import { Button } from '@material-ui/core';
import { register } from '../middleware/userRequests'

function Register () {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const registerUser = async () => {
        let userInfo = {
            username,
            email,
            password
        }

        let response = await register(userInfo);
        console.log(response);
    }

    return (
        <div className='login-base-container' >
            <div className='login-header'>Register</div>
            <div className='login-content'>
                <div className='login-img'>
                    <img src={loginImg} alt='img' />

                </div>
                <div className='login-form'>
                    <div className='login-form-group'>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={username} onChange={onChangeUsername} placeholder="username" />
                    </div>
                    <div className='login-form-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={email} onChange={onChangeEmail} placeholder="email" />
                    </div>
                    <div className="login-form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={password} onChange={onChangePassword} placeholder="password" />
                    </div>

                </div>
            </div>
            <div className="login-form-footer">
                <Button size='large' id='get-started-btn' variant='contained' onClick={registerUser}>Register</Button>

            </div>

        </div>
    )
}

export default Register;