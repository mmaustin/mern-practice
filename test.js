const item = {word: 'banana'};
const count = item.word.length
const value = Array.from({length: count}, (_,i) => {
    //console.log(_);
    return i
})
console.log(value);
