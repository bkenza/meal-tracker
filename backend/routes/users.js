const router = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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


router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Find user by email
    User.findOne({ username }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json('Error: Username not found');
        }

        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user._id,
                    username: user.username
                };

                const secret = process.env.REACT_APP_PRIVATE_KEY;

                // Sign token
                jwt.sign(
                    payload,
                    secret,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });
    })
});

module.exports = router;
