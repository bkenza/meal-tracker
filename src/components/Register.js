import React from 'react';
import login from '../images/login.svg';
import { Button } from '@material-ui/core';

function Register () {

    return (
        <div className='login-base-container' >
            <div className='login-header'>Register</div>
            <div className='login-content'>
                <div className='login-img'>
                    <img src={login} />

                </div>
                <div className='login-form'>
                    <div className='login-form-group'>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className='login-form-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="email" />
                    </div>
                    <div className="login-form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" />
                    </div>

                </div>
            </div>
            <div className="login-form-footer">
                <Button size='large' id='get-started-btn' variant='contained'>Register</Button>

            </div>

        </div>
    )
}

export default Register;