const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

// Express app
const app = express();

// connect to database
connectDB();

// Middleware for parsing JSON
app.use(express.json());

// Auth Route
// app.use("/auth", require("./route/authRoute"));

// Main Route
app.use("/", require("./route/mainRoute"));

// Todos
app.use("/todos", require("./route/todoRoute"));

// get requests
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
