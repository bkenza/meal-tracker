import NavBar from './NavBar';
import 'date-fns';
import React from 'react';
import { Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

function CreateMeal () {

    const [username, setUsername] = React.useState(''); // add username from local storage
    const [description, setDescription] = React.useState('');
    const [type, setType] = React.useState('Breakfast');
    const [date, setDate] = React.useState(new Date());

    const users = ['test'];
    const types = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    const onChangeType = (e) => {
        setType(e.target.value);
    }

    const onChangeDate = (e) => {
        setDate(e);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const meal = {
            username: username,
            description: description,
            type: type,
            date: date
        }

        console.log(meal);
    }

    return (
        <div>
            <NavBar />
            <div className='create-meal-title-container'>
                <h3 id='create-meal-title'>Create New Meal Log</h3>
            </div>
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
                        <div className="form-group">
                            <label>Type: </label>
                            <br />
                            <select
                                required
                                value={type}
                                onChange={onChangeType}>
                                {types.map((type, index) =>
                                (
                                    <option key={index}
                                        value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </div>
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
                            <Button id='cancel-btn' variant='contained' onClick={onSubmit}>Cancel</Button>
                        </div>
                    </form>

                </div>
            </div>
        </div >
    )
}

export default CreateMeal;