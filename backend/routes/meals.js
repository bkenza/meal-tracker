const router = require('express').Router();
let Meal = require('../models/meal.model');

// Get all meals
router.route('/').get((req, res) => {
    Meal.find()
        .then(meals => res.json(meals))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get meal by id
router.route('/:id').get((req, res) => {
    Meal.findById(req.params.id)
        .then(meal => res.json(meal))
        .catch(err => res.status(400).json('Error: ' + err))
});

// Add new meal
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const type = req.body.type;
    const date = Date.parse(req.body.date);

    const newMeal = new Meal({
        username,
        description,
        type,
        date,
    });

    newMeal.save()
        .then(() => res.json('Meal added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete meal by id
router.route('/:id').delete((req, res) => {
    Meal.findByIdAndDelete(req.params.id)
        .then(() => res.json('Meal deleted!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

// Update meal
router.route('/update/:id').post((req, res) => {
    Meal.findById(req.params.id)
        .then(meal => {
            meal.username = req.body.username,
                meal.description = req.body.description,
                meal.type = req.body.type,
                meal.date = Date.parse(req.body.date);

            meal.save()
                .then(() => res.json('Meal updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;