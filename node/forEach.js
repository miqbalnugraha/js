let numbers = [10,15,25];

numbers.forEach(number => {
    console.log(number);
})

let result = numbers.map(number => {
    return number*2;
})
console.log(result);

let result2 = numbers.map(number => number*2);
console.log(result2);