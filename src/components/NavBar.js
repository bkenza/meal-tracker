import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function NavBar () {

    return (
        <div className='navbar-container'>
            <h2 id='title'><a href='/' id='title'>Meal Tracker</a></h2>
            <div className='navbar-middle'>
                <Button href='/dashboard' color="inherit" className="nav-link" >My meals</Button>
                <Button href='/create-meal' color="inherit" className="nav-link" >Create meal log</Button>
                <Button href='my-account' color="inherit" className="nav-link" >My account</Button>
            </div>
            <Button id='navbar-right'>Logout</Button>
        </div >

    )
}

export default NavBar;