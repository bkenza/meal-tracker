import NavBar from './NavBar';
import 'date-fns';
import React from 'react';
import { addMeal } from '../middleware/mealRequests';
import { Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function CreateMeal (props) {

    const types = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
    const [description, setDescription] = React.useState('');
    const [type, setType] = React.useState(types[0]);
    const [date, setDate] = React.useState(new Date());
    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(false);

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    const onChangeType = (e) => {
        setType(e.target.value);
    }

    const onChangeDate = (e) => {
        setDate(e);
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const mealObject = {
            username: localStorage.getItem('username'),
            description: description,
            type: type,
            date: date
        }

        let response = await addMeal(mealObject);
        if (response) {
            setSuccess(true);
            setError(false);
        }
        else {
            setSuccess(false);
            setError(true);
        }
    }

    const onClickCancel = () => {
        props.history.push('/dashboard');
    }

    return (
        <div>
            <NavBar />
            <div className='create-meal-title-container'>
                <h3 id='create-meal-title'>Create New Meal Log</h3>
            </div>
            {success && <p id='success-message'>Your meal log has been updated successfully!</p>}
            {error && <p id='error-message'>An error occurred. Please try again later!</p>}
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
                                required
                                labelId="mood-select-label"
                                id="type-select-label"
                                value={type}
                                onChange={onChangeType}
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
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    id="date-picker-inline"
                                    value={date}
                                    onChange={onChangeDate}
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
                            <Button id='create-btn' variant='contained' onClick={onSubmit}>Create</Button>
                            <Button id='cancel-btn' variant='contained' onClick={onClickCancel}>Cancel</Button>
                        </div>
                    </form>

                </div>
            </div>
        </div >
    )
}

export default CreateMeal;