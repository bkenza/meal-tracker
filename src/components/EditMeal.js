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
    const types = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
    const [mealToEdit, setMealToEdit] = React.useState({});
    const [username, setUsername] = React.useState('');
    const [type, setType] = React.useState(types[0]);
    const [description, setDescription] = React.useState('');
    const [date, setDate] = React.useState(new Date());
    const id = useParams();

    React.useEffect(() => {
        fetchMeal();
    }, [])


    const fetchMeal = async () => {
        setMealToEdit(await getMealById(id));
        setUsername(mealToEdit.username);
        setType(mealToEdit.type);
        setDescription(mealToEdit.description);
        setDate(mealToEdit.date);
    }

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
            id: id,
            username: 'kenza',
            description: description,
            type: type,
            date: date
        }
        await editMeal(mealObject);
    }

    const onClickCancel = () => {
        props.history.push('/dashboard');
    }

    if (Object.keys(mealToEdit).length > 2) {
        return (
            <div>
                <NavBar />
                <div>
                    <div className='create-meal-title-container'>
                        <h3 id='create-meal-title'>Edit Meal Log</h3>
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

                            <form className='create-meal-form'>
                                <label>Type:</label>
                                <br />
                                <FormControl className="form-group-select">
                                    <Select
                                        required
                                        labelId="mood-select-label"
                                        id="type-select-label"
                                        value={type ? type : types[0]}
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
                                    <Button id='create-btn' variant='contained' onClick={onSubmit}>Edit</Button>
                                    <Button id='cancel-btn' variant='contained' onClick={onClickCancel}>Cancel</Button>
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
            <div>oops</div>
        )
    }

}

export default Editmeal;