import NavBar from './NavBar';
import React from 'react';
import { getAllMeals } from '../middleware/mealRequests';

function Dashboard () {
    const [meals, setMeals] = React.useState([]);

    const getMeals = async () => {
        setMeals(await getAllMeals());
    }

    React.useEffect(() => {
        getMeals();
    }, [])


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
                            <p>{meal.type}</p>
                            <p>{meal.description}</p>
                            <p>{new Date(meal.date).toDateString()}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard;