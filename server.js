import express from 'express';
const app = express();
const port = 3020;

const requestTime = (req, res, next) => {
    req.requestTime = Date.now()
    next()
}
  
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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})