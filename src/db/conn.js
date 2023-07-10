const mongoose = require("mongoose");

// creating a database
const DB = 'mongodb+srv://kysvamsi:kysvamsitechnovate@cluster0.bqvubqh.mongodb.net/technovate?retryWrites=true&w=majority';

mongoose.connect(DB, {}).then(() => {
    console.log("Connection Successful");
}).catch((error) => {
    console.log(error);
})
