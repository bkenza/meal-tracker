import axios from 'axios';

export const getTotalMeals = async () => {
    const GET_MEALS_ENDPOINT = `http://localhost:5000/meals`
    try {
        let response = await axios.get(GET_MEALS_ENDPOINT);
        if (response.status === 200) {
            return response.data;
        }
    }
    catch (e) {
        console.log('Error fetching meals.');
        console.log(e);
    }
}

export const getAllMeals = async (username) => {
    const GET_MEALS_ENDPOINT = `http://localhost:5000/meals/${username}`
    try {
        let response = await axios.get(GET_MEALS_ENDPOINT);
        if (response.status === 200) {
            return response.data;
        }
    }
    catch (e) {
        console.log('Error fetching meals.');
        console.log(e);
    }
}

export const getMealById = async (id) => {
    const GET_MEAL_BY_ID_ENDPOINT = `http://localhost:5000/meals/${id.id}`;

    try {
        let response = await axios.post(GET_MEAL_BY_ID_ENDPOINT);
        if (response.status === 200) {
            return response.data;
        }
    }
    catch (e) {
        console.log('Error fetching meal.')
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
    const EDIT_MEAL_ENDPOINT = `http://localhost:5000/meals/update/${meal.id.id}`;
    try {
        let response = await axios.post(EDIT_MEAL_ENDPOINT, meal);

        if (response.status === 200) {
            return response.data;
        }
    }
    catch (e) {
        console.log('Error updating meal')
        console.log(e)
    }
}