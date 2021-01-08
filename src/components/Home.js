import Goo from './Goo';
import { Button, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

function Home (props) {

    const handleClick = () => {
        props.history.push('/dashboard')
    }

    return (
        <div className='homepage-container'>
            <Goo />
            <div className='social-icons'>
                <IconButton target="_blank" href='https://www.linkedin.com/in/kenza-boulisfane-a3592017a/'>
                    <LinkedInIcon id='icon' />
                </IconButton>
                <IconButton target="_blank" href='https://github.com/bkenza'>
                    <GitHubIcon id='icon' />
                </IconButton>
                <IconButton target="_blank" href='https://www.instagram.com/kenza.png/'>
                    <InstagramIcon id='icon' />
                </IconButton>
            </div>
            <div className='homepage-content'>
                <h4 id='homepage-title'>Meal Tracker</h4>
                <Button size='large' id='get-started-btn' variant='contained' onClick={handleClick}>Get started</Button>
            </div>
        </div>
    )
}

export default Home;