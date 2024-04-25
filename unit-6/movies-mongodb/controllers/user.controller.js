const router = require('express').Router();
const User = require('../models/user.model');

router.post('/signup', async (req,res) => {
    // res.send('Connected')

    try {
        
        // Capture data from client
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }); // using values from req.body to form our user document.

        // console.log('BEFORE: ', user);

        const newUser = await user.save();
        // writes to database. Returns a response - why it should be an "await"
        // console.log(newUser);

        res.status(200).json({
            user: newUser,
            message: "Success!"
        })

    } catch (err) {
        res.status(500).json({
            ERROR: err.message
        })
    }
})

module.exports = router;