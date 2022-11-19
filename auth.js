const jwt = require("jsonwebtoken");

// create and export an asynchrnous function in which the authorisation code:
module.exports = async (req, res, next) => {
    try {
        // get the token from the authrization header
        const token = req.headers.authorization.split(" ")[1];

        // check if the token matches the supposed origin
        const decodedToken = await jwt.verify(token, "RANDOM-TOKEN");

        // retrieve the user details of the logged in user
        const user = await decodedToken;

        // pass the user down to the endpoints here
        req.user = user;

        // pass down functionality to the endpoint
        next();
    } catch (error) {
        res.status(401).json({
            error: error | "Not authenticated!"
        });
    }
};