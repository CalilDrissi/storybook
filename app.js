const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const exphbs = require('express-handlebars');


//* Load Config 
dotenv.config({path: './config/config.env'});

//* connecting DB
connectDB();

//* initializing app
const app = express();
const PORT = process.env.PORT || 3000;

//* morgan setup
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}


// * Running app
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));


