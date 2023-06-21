const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

require("../db/connect");
const User = require("../models/userSchema");

// Routes
router.get("/", (req, res) => {
    res.send("Hello world from the router server");
});

// ********** user registration route **********
// ********** user registration route **********

// ********** Promise version of post request to database **********
// router.post('/register', (req, res) => {
//     const { name, email, phone, work, password, cpassword } = req.body;

//     // check if user entered data correctly
//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "Please fill the requested fields properly" });
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             // check if user alredy exist
//             if (userExist) {
//                 return res.status(422).json({ error: "Email already exists" });
//             }

//             // creating a new user object instance using User model
//             const user = new User({ name, email, phone, work, password, cpassword });

//             // saving user to database
//             user.save()
//                 .then(() => {
//                     res.status(201).json({ message: "User registered successfully" });
//                 })
//                 .catch((err) => res.status(500).json({ error: "Failed to register" }));
//         })
//         .catch(err => console.log(err));
// })

// ********** Async-await version of post request to database **********
router.post("/register", async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    // check if user entered data correctly
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill the requested fields properly" });
    }

    try {
        // check if user alredy exist
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exists" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password doesn't match" });
        } else {
            // creating a new user object instance using User model
            const user = new User({ name, email, phone, work, password, cpassword });

            // hashing is done here like middleware

            // saving user to database
            await user.save();

            res.status(201).json({ message: "User registered successfully" });
        }
    } catch (err) {
        console.log(err);
    }
});

// ********** user login route **********
// ********** user login route **********
router.post("/signin", async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Enter Login Credentials" });
        }

        const user = await User.findOne({ email: email });
        // .find() returns the array of documents which matched with the given query

        if (!user) {
            return res.status(401).json({ error: "User not registered" });
        } else {
            const isMatch = await bcrypt.compare(password, user.password);
            // console.log(token);
            // console.log(user, isMatch);
            
            if (isMatch) {
                token = await user.generateAuthToken();
                res.cookie("jwt", token, {
                    // cookie expires in 30 days ( 2592000000 mili-seconds )
                    expires: new Date(Date.now() + 2592000000),
                    httpOnly: true
                })
                return res.json({ message: "Login Successful" });
            } else {
                return res.status(403).json({ message: "Invalid Credentials" });
            }
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;

// sample user

// {
//             "name": "yogi",
//             "email": "khushdevyogi001@gmail.com",
//             "phone": 9876543210,
//             "work": "webdev",
//             "password": "123abc",
//             "cpassword": "123abc"
// }
