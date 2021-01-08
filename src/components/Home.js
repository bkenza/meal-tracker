import { Button, IconButton } from '@material-ui/core';
import { useTrail, animated } from 'react-spring';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

function Goo () {
    const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))
    return (
        <>
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
                    <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
                </filter>
            </svg>
            <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
                {trail.map((props, index) => (
                    <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
                ))}
            </div>
        </>
    )

}

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