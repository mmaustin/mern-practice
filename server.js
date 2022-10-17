import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5001

const requestTime = (req, res, next) => {
    req.requestTime = Date.now()
    next()
}

import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
  
app.use(requestTime)
app.use(express.json());

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

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})