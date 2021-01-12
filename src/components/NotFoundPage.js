import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const NotFoundPage = () => {
    return (
        <div >
            <NavBar />
            <p id='not-found'>Page not found. Go to <Link to="/">Home Page</Link></p>
        </div>
    );
};

export default NotFoundPage;