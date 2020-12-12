const express = require ('express');         // Import 'express', a ligh-weight framework
const app = express()                        // Init express and save it in "app" variable
const mongoose = require('mongoose');       // Import mongoose, a tool that gives NoSQL (such as MongoDB)
const bodyParser = require ('body-parser'); // Import body-parser, To handle different type of formates
const cors = require('cors');              // Import cors, for allowing cross-origin request


//Middleware
app.use(cors());                    //Allowing cross-origin requests
app.use(bodyParser.json());         // Format data to JSON

const postRouter = require('./routes/posts');
app.use('/posts', postRouter);


//** */ !! All the routes have been transfered to a seperate file 'posts.js' **


mongoose.connect(
    'mongodb+srv://blog_user:9wn7nw8o@cluster0.fm6eq.mongodb.net/Cluster0?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log('DB connected');
    }
)

//Listen to server
app.listen (3000); // Listen through port 3000. This is what we write in our browser localhost