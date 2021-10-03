const express = require ('express');         
const app = express()                        
const mongoose = require('mongoose');       // Import mongoose, a tool that gives NoSQL (such as MongoDB)
const cors = require('cors');              // Import cors, for allowing cross-origin request


//Middleware
app.use(cors());                    //Allowing cross-origin requests
app.use(express.urlencoded({ extended: true })); // Body parser is deprecated and replaced by this

const postRouter = require('./routes/posts');
app.use('/posts', postRouter);


//** */ !! All the routes have been transfered to a seperate file 'posts.js' **


mongoose.connect(
    'mongodb+srv://blog_user:hejhej123@cluster0.fm6eq.mongodb.net/Cluster0?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log('DB connected');
    }
)

//Listen to server
app.listen (3000); // Listen through port 3000. This is what we write in our browser 'localhost:3000'