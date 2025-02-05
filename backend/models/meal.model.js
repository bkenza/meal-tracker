const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mealSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

mealSchema.index({ username: 'text' });

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;