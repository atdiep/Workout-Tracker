const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password7@ds315359.mlab.com:15359/heroku_08g169vp", {
    useNewUrlParser: true,
    useFindAndModify: false
});

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`)
})
