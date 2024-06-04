const express = require('express');
require('dotenv').config();
const workoutRoutes = require('./routes/workouts');


// express app
const app = express();
//midleware
app.use(express.json());


app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
// app.get('/', (req, res) => {
//     res.json({msg: 'Welcome de the app'})
// })

app.use('api/workouts',workoutRoutes);

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listenning on port 4000')
})