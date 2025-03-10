// let age = 33

/*
console.log(typeof age); => number
*/

// let age = "33"

/*
console.log(typeof age); => string
*/

// Conversion of number into string

// let age = "33"
// let valueInNumber = Number(age)
// console.log(typeof valueInNumber);

/*
converts the above string to number
*/

// string in numbers with characters

// let age = "33abc"
// let valueInNumber = Number(age)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); /* => output type NaN (NaN is a special type) */

// Using Null Value

let age = null
let valueInNumber = Number(age)
console.log(typeof valueInNumber);
console.log(valueInNumber); /* Gives output as 0 (this case occurs sometimes when it is not able to convert properly) */