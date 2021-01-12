import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import React from 'react';
import { editMeal, getMealById } from '../middleware/mealRequests';
import 'date-fns';
import { Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function Editmeal (props) {

    const id = useParams();
    const types = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
    const [mealToEdit, setMealToEdit] = React.useState({});
    const [description, setDescription] = React.useState('');
    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(false);

    const fetchMeal = async () => {
        setMealToEdit(await getMealById(id));
        if (mealToEdit) {
            setDescription(mealToEdit.description);
        }
    }

    React.useEffect(() => {
        fetchMeal();
    }, [])

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const mealObject = {
            id: id,
            username: 'kenza',
            description: description,
            type: mealToEdit.type,
            date: mealToEdit.date
        }
        let response = await editMeal(mealObject);
        if (response) {
            setSuccess(true);
            setError(false);
        }
        else {
            setError(true);
            setSuccess(false);
        }
    }

    const onClickCancel = () => {
        props.history.push('/dashboard');
    }

    if (mealToEdit && Object.keys(mealToEdit).length > 2) {
        return (
            <div>
                <NavBar />
                <div>
                    <div className='create-meal-title-container'>
                        <h3 id='create-meal-title'>Edit Meal Log: </h3>
                        <h4 id='create-meal-title'>{mealToEdit.description}</h4>
                    </div>
                    {success && <p id='success-message'>Your meal log has been updated successfully!</p>}
                    {error && <p id='error-message'>An error occurred. Please try again later</p>}
                    <div className='dashboard-container'>

                        <div className='dashboard-content-container'>
                            <div className='title-bar'>
                                <div className='title-bar-btns'>
                                    <div className='close'></div>
                                    <div className='minimize'></div>
                                    <div className='expand'></div>
                                </div>
                            </div>

                            <form className='create-meal-form' onSubmit={onSubmit}>
                                <label>Type:</label>
                                <br />
                                <FormControl className="form-group-select">
                                    <Select
                                        disabled
                                        required
                                        labelId="mood-select-label"
                                        id="type-select-label"
                                        defaultValue={mealToEdit.type ? mealToEdit.type : types[0]}
                                    >
                                        {types.map((item, index) => (
                                            <MenuItem key={index} value={item}>{item}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <div className="form-group">
                                    <label>Date: </label>
                                    <br />
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            value={mealToEdit.date}
                                            disabled
                                            disableToolbar
                                            variant="inline"
                                            format="MM/dd/yyyy"
                                            id="date-picker-inline"
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </div>
                                <div className="form-group">
                                    <label>Description: </label>
                                    <br />
                                    <textarea type="text"
                                        required
                                        id="description-box"
                                        value={description}
                                        onChange={onChangeDescription}
                                    />
                                </div>
                                <div className="create-btn-container">
                                    <Button id='create-btn' variant='contained' onClick={onSubmit}>Edit</Button>
                                    <Button id='cancel-btn' variant='contained' onClick={onClickCancel}>Cancel</Button>
                                    <Button id='cancel-btn' variant='contained' onClick={onClickCancel}>delete</Button>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='display-error-container'>
                <p id='ugh'>UGH!</p>
                <div className='display-error'>Sorry, something went wrong. Please try again later!</div>
                <Button size='large' id='get-started-btn' variant='contained' onClick={onClickCancel}>Go Back</Button>
            </div>
        )
    }

}

export default Editmeal;