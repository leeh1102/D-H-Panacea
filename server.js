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


// Otherise, go to the FE
app.listen(port, (err) => {
    if (err) return console.loge(err);
    console.log("Server running on port: ", port);
})