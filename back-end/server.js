const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const routeConfig = require('./src/config/routeConfig');
const errorHandler = require('./src/middleware/errorHandler');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}...`));

app.use(cors({ origin: process.env.FRONT_URL, credentials: true }));

routeConfig(app);

app.use(errorHandler);

process.on('unhandledRejection', err => {
    console.log(`Unhandled Error: ${err}`);
    process.exit(1);
});