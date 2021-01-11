import NavBar from './NavBar';
import React from 'react';
import { getAllMeals } from '../middleware/mealRequests';
import { Button, IconButton } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

function Dashboard (props) {
    const [meals, setMeals] = React.useState([]);
    const userLoggedIn = localStorage.getItem('username');

    const getMeals = async () => {
        setMeals(await getAllMeals(userLoggedIn));
    }

    const handleClick = () => {
        props.history.push('/create-meal')
    }

    React.useEffect(() => {
        getMeals();
    }, [])

    if (meals) {
        return (
            <div >
                <NavBar />
                <div className='meals-title-container'>
                    <h1>My meals</h1>
                </div>
                <div className='meals-container'>
                    {meals.map((meal, index) => (
                        <div key={index} className='meal-card'>
                            <div className='title-bar'>
                                <div className='title-bar-btns'>
                                    <div className='close'></div>
                                    <div className='minimize'></div>
                                    <div className='expand'></div>
                                </div>
                            </div>
                            <div className='meal-info'>
                                <div className='title-div'>
                                    <p id='meal-type'>{meal.type}</p>
                                    <IconButton id='edit-icon-btn' >
                                        <Link to={`/edit-meal/${meal._id}`}>
                                            <EditIcon id='edit-icon' />
                                        </Link>
                                    </IconButton>
                                </div>
                                <div className='meal-details'>
                                    <FastfoodIcon id='food-icon' />
                                    <p>{meal.description}</p>
                                    <p>{new Date(meal.date).toDateString()}</p>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <NavBar />
                <div className='no-meals'>
                    <h1>No meals logged yet!</h1>
                    <Button size='large' id='get-started-btn' variant='contained' onClick={handleClick}>Get started</Button>
                </div>
            </div>

        )
    }

}

export default Dashboard;