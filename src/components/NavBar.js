import { logout } from '../middleware/userRequests';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

function NavBar (props) {

    const onClick = () => {
        logout();
        props.history.push('/');
    }

    return (
        <div className='navbar-container'>
            <h2 id='title'><a href='/' id='title'>Meal Tracker</a></h2>
            <div className='navbar-middle'>
                <Button href='/dashboard' color="inherit" className="nav-link" >My meals</Button>
                <Button href='/create-meal' color="inherit" className="nav-link" >Create meal log</Button>
                <Button href='my-account' color="inherit" className="nav-link" >My account</Button>
            </div>
            <Button id='navbar-right' onClick={onClick}>Logout</Button>
        </div >

    )
}

export default withRouter(NavBar);