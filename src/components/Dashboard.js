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
            <div className='meals-container'>

            </div>
        </div>
    )
}

export default Dashboard;