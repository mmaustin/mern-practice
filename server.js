import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors'

import connectDB from './db/connect.js';

import authRouter from './routes/authRoutes.js';
import eventRouter from './routes/eventRoutes.js';

import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/events', eventRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5001

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start();


/*
const requestTime = (req, res, next) => {
    req.requestTime = Date.now()
    next()
}

app.use(requestTime)

app.get('/', (req, res) => {
    //let responseText = 'Hello World!<br>'
    //responseText += `<small>Requested at: ${req.requestTime}</small>`
    let timeNow = `The time is ${req.requestTime}`;
    res.json(timeNow);
})

app.post('/', (req, res) => {
    req.smash = {smashed: 77};
    const {smashed} = req.smash;
    const {name, age, home} = req.body;
    const sentence = `My name is ${name}. I am ${age} years old, and I live in ${home}. Can I do this: ${smashed}?`
    res.json(sentence);
})

app.post('/register', async (req,res)=>{
    const data = req.body;
    res.json({name: data.name, email: data.email, password: data.password});
})

*/