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
// console.log(typeof valueInNumber); => number

/*
converts the above string to number 
number
*/

//let age = "33abc"
// let valueInNumber = Number(age)
// console.log(typeof valueInNumber);

// console.log(valueInNumber); => NaN


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


//let age = undefined
//let valueInNumber = Number(age)
//console.log(typeof valueInNumber);
//console.log(valueInNumber); /* Gives output as NAN */

// Conversion of boolean

// let age = true 
// let valueInNumber = Number(age)
// console.log(typeof valueInNumber); => number
// console.log(valueInNumber); /* Gives output as 1 if false it gives as 0*/

// let age ="javascript" // => This cannot be converted in number as this is a string
// let valueInNumber = Number(age)
// console.log(typeof valueInNumber); // => number
// console.log(valueInNumber); // => NaN

// "33" => 33
// "33abc" => NAN (type is number)
// true => 1; false => 0

// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn) => boolean 
// console.log(booleanIsLoggedIn) => true


/* Emty String

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn) => boolean
console.log(booleanIsLoggedIn) => false

*/

/* Conversion of String Boolean */

// let isLoggedIn = "String"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn) => boolean
// console.log(booleanIsLoggedIn) => true

// 1 = true ; 0 => false

// "" => false 

// "string" => true

/* Conversion of Number to String */ 

// let someNumber = 33

// let stringNumber = String (someNumber)
// console.log(typeof someNumber) => number
// console.log(stringNumber) => 33
// console.log(typeof stringNumber) => string


// *************************** Operations //************************************//

// let value = 3
// let negValue = -value
// console.log(negValue) => -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Javascript"
let str2 = " Series"

let str3 = str1 + str2;

//console.log(str3) => Javascript Series

// console.log("1" + 2); => 12 (By default if its string first it will keep string)
// console.log(1 + "2"); => 12
// console.log("1" + 2 + 2); => 122
// console.log(1 + 2 + "2"); => 32

// console.log((3+4) * 5 % 3) ;

// console.log(+true) => not clean always should be clean and redable output as 1

// console.log(+"") => 0 as empty string is false 

// let num1 , num2 , num3

// num1= num2 = num3 = 2 + 2 => not preferred as difficulty reading and no consistency

// let gameCounter = 100

// gameCounter++;

// prefix => ++gameCounter (the increment operator increments and returns the value after incrementing,the increment operator increments and returns the value after incrementing )

// postfix => gameCounter++ (the increment operator increments and returns the value before incrementing ,Use the current value first, then increase it by 1)

// console.log(gameCounter) => 101





