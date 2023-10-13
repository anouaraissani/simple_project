// Requiring module 
const mongoose = require('mongoose'); 
require('dotenv').config()
const port = process.env.PORT || 3000
// const routes = require('./routes');
const express = require('express');
const app = express()

// database connection
url = process.env.mongo_url
async function connect(){
    try{
        await mongoose.connect(url)
        console.log('Connected to mongoDB')
            
        } catch(err){
            console.log(err)
        }
}

connect();

// app.use('/api', routes);
// Include your routes
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);
const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


