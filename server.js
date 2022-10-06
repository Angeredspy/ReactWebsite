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

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('site/build'))
    app.get('*',(req,res)=>
        res.sendFile(path.resolve(__dirname, 'site', 'build', 'index.html'))
    );
}

const port = process.env.PORT || 4000;
app.listen(port, console.log(`server listening to port 4000`))