require('dotenv').config
const express = require('express')
const cors = require('cors')
const path = require('path')

const contactRoute = require('./route/contactRoute')

const app = express();

//Creating the middleware
app.use(express.json())
app.use(cors())

app.use('/', contactRoute);

const port = process.env.PORT || 4000;
app.listen(port, console.log(`server listening to port 4000`))