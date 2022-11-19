const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require("mongoose");
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb+srv://panacea:dhs9394@panacea0.e12fqfp.mongodb.net/test");
    console.log("Connected to MongoDB");
}

const path = require("path");
const { StringDecoder } = require("string_decoder");

// const { mainModule } = require("process");

const port = process.env.PORT || 8080;

if (process.env.NODE_ENV === "production") {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
}

app.get('/api', (req, res) => {
    res.send({ express: 'Hello From Express' })
})


// REGISTER A USER
const bcrypt = require("bcrypt");
const User = require("./schemas/user");
// register endpoint
app.post("/sign-up", (request, response) => {
    // hash the password
    bcrypt
        .hash(request.body.password, 10)
        .then((hashedPassword) => {
            // create a new user instance and collect the data
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                email: request.body.email,
                password: hashedPassword,
            });

            // save the new user
            user
                .save()
                // return success if the new user is added to the database successfully
                .then((result) => {
                    response.status(201).send({
                        message: "User Created Successfully",
                        result,
                    });
                })
                // catch error if the new user wasn't added successfully to the database
                .catch((error) => {
                    response.status(500).send({
                        message: "Error creating user",
                        error,
                    });
                });
        })
        // catch error if the password hash isn't successful
        .catch((e) => {
            response.status(500).send({
                message: "Password was not hashed successfully",
                e,
            });
        });
});


// LOGIN A USER
const jwt = require("jsonwebtoken");
// login endpoint
app.post("/login", (req, res) => {
    User.findOne({ email: req.body.email })
        // if email exists
        .then((user) => {
            // compare the passward entered and the hashed password in the database 
            bcrypt
                .compare(req.body.password, user.password)
                .then((passwordCheck) => {
                    // check if password matches
                    if (!passwordCheck) {
                        return res.status(400).send({
                            message: "Password is incorrect",
                            error;
                        });
                    }

                    // create JWT token
                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userEmail: user.email,
                        },
                        "RANDOM-TOKEN",
                        { expiresIn: "24h" }
                    ),
                        // return success response
                        res.status(200).send({
                            message: "Login successful",
                            email: user.email,
                            token,
                        });
                })
                // catch error if password does not match
                .catch((error) => {
                    res.status(400).send({
                        messge: "Password does not match",
                        error,
                    });
                });
        })
        // catch error if email does not exist
        .catch((error) => {
            res.status(404).send({
                message: "Email does not exist",
                error,
            });
        });
});


// Otherise, go to the FE
app.listen(port, (err) => {
    if (err) return console.loge(err);
    console.log("Server running on port: ", port);
})