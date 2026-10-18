// let age = 33 (here we know its number)

/*
console.log(typeof age); => number
*/

// const {score} = req.body (but here we dont know whether its number or string or just number)

// let age = "33"

/*
console.log(typeof age); => string
console.log(typeof (age)); (second method to write this)


*/

// Conversion of number into string

// let age = "33"
// let valueInNumber = Number(age) => (Number is always used in Capital and data types is used as same String etc )
// console.log(typeof valueInNumber);

/*
converts the above string to number 
number
*/

let age = "33abc"
let valueInNumber = Number(age)
console.log(typeof valueInNumber);

console.log(valueInNumber);

/*NaN */



// string in numbers with characters

// let age = "33abc"
// let valueInNumber = Number(age)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); /* => output type NaN (NaN is a special type) */

// Using Null Value

//let age = null
//let valueInNumber = Number(age)
//console.log(typeof valueInNumber);
//console.log(valueInNumber); /* Gives output as 0 (this case occurs sometimes when it is not able to convert properly) */