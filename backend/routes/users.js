const router = require('express').Router();
const bcrypt = require("bcryptjs");


let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {


    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json('Error: email already exists.')
        }
        else {
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            });

            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then((user) => res.json('User added!' + user))
                        .catch(err => res.status(400).json('Error: ' + err));
                });
            });
        }
    });
});



// Delete user by id
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;
