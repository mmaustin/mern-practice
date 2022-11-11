import fetch from 'node-fetch';
import axios from 'axios';

/*const item = {word: 'banana'};
const count = item.word.length
const value = Array.from({length: count}, (_,i) => {
    //console.log(_);
    return i
})
console.log(value);*/

// let a = '';
// a  ? console.log('looka here') : console.log('don\'t looka here')

// const eloquent = async () => {
//     try {
//         const {data} = await axios.get('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
//         //const data = await response.json();
//         //console.log(JSON.stringify(data));
//         const names = data.members.map((obj, i)=>{ return `${i+1}: ${obj.name}`});
//         console.log(names)        
//     } catch (error) {
//         console.log(error.message);
        
//     }
// }
// eloquent();

//console.log(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/.test('11/02/1975')); //date
//console.log(/^((1[0-2]|0?[0-9]):[0-5]?[0-9]\s([ap][m])|((2[0-3]|[0-1]?[0-9]):[0-5][0-9]))$/igm.test('11:30 ')); //time

const obj = {name: "mccray", age: 47, location: "crown heights"};
const makersMark = ({...obj}) => {
    console.log(`My name is ${name}. I'm ${age}, and I live in ${location}.`)
}
makersMark(obj);