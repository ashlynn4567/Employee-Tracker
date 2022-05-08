// import all necessary dependencies
const express = require("express");
const db = require("./db/connection");
const routes = require("./routes");

// instantiate the server and set port
const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// turn on routes
app.use(routes);

// default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});

// start server after db connection 
db.connect(err => {
    if (err) throw err;
    console.log("Database connected.");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}.`);
    });
});
