let num1 = 10;
let str1 = 'avengers';
console.log(typeof num1); // returns "number"
console.log(typeof str1); // returns "string"

let num2 = '20';
let str2 = 'assemble'
console.log(+num2); // converts string '20' to number 20
console.log(+str2); // returns NaN, as it can't convert string 'assemble' to number

let num3 = 4;
let num4 = 0;
let str3 = 'avengers assemble';
console.log(!str3); // Except empty string, any string is truthy value - so it returns false
console.log(!num3); // Any number except 0 is truthy value - so it returns false
console.log(!num4); // 0 is falsy value - so it returns true
