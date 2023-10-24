require("dotenv").config()
const express = require('express');
const cors = require("cors");
const cookieParser  = require("cookie-parser");
const mongoose = require("mongoose");


const app = express();
const PORT = process.env.PORT || 5000;
const start = async () => {
    try {
        app.listen(5000, () => console.log(`server started at ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start();
