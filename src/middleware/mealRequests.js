import axios from 'axios';

export const getAllMeals = async () => {
    const GET_MEALS_ENDPOINT = 'http://localhost:5000/meals'
    try {
        let response = await axios.get(GET_MEALS_ENDPOINT);
        if (response.status === 200) {
            return response.data;
        }
    }
    catch (e) {
        console.log('Error fetching meals.')
        console.log(e);
    }
}

export const addMeal = async (meal) => {
    const CREATE_MEAL_ENDPOINT = 'http://localhost:5000/meals/add';
    try {
        let response = await axios.post(CREATE_MEAL_ENDPOINT, meal);

        if (response.status === 200) {
            return response.data;
        }
    }
    catch (e) {
        console.log('Error adding meal')
        console.log(e)
    }
}

export const editMeal = async (meal) => {
    const EDIT_MEAL_ENDPOINT = 'http://localhost:5000/meals/update';
    try {
        let response = await axios.post(EDIT_MEAL_ENDPOINT, meal);

        if (response.status === 200) {
            return response.data;
        }
    }
    catch (e) {
        console.log('Error adding meal')
        console.log(e)
    }
}