require('dotenv').config(); // connects our .env file to our project.
const express = require('express');
const app = express();
const PORT = process.env.PORT; // points to our environment file and puts the value of PORT from that variable into this PORT variable.
const userController = require('./controllers/user.controller')
const movieController = require('./controllers/movie.controller');
// const validateSession = require('./middleware/validate-session');
const cors = require('cors');

//! MongoDB Connection
const mongoose = require('mongoose'); // used from node_modules.
const MONGO = process.env.MONGODB // connection variable from .env

mongoose.connect(`${MONGO}/moviedb`) // connection middleware. Est. route and defining our Collection we are targeting.
//* Doesn't display until there is a document within the collection

const db = mongoose.connection; // event listener to check if connected.
db.once('open', () => console.log(`Connected: ${MONGO}`));

//* Middleware
app.use(cors());
app.use(express.json()) // added to allow us to accept JSON data from the body of our client.

//* Routes / Controllers
app.use('/user', userController)
// app.use(validateSession) // when active will block all routes below.
app.use('/movies', movieController)

app.listen(PORT, () => console.log(`Movie Server on Port: ${PORT}`));