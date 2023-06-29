const mongoose = require("mongoose");

// creating a database
mongoose.connect("mongodb://127.0.0.1:27017/technovateDB", {}).then(() => {
    console.log("Connection Successful");
}).catch((error) => {
    console.log(error);
})
