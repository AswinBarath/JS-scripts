// var declaration with initialization
var num1 = 10;
console.log(num1);

// var declaration, then initialization
var num2;
num2 = 20;
console.log(num2);

// var declaration then re-initialization
var num3 = 30;
num3 = 40;
console.log(num3);


// let declaration with initialization
let str1 = 'variable';
console.log(str1);

// let declaration, then initialization
let str2;
str2 = 'test';
console.log(str2);

// let declaration then re-initialization
let str3 = 'numbers';
str3 = 'numerals';
console.log(str3);


// const declaration with initialization
const bool = true;
console.log(bool);

// const cannot be initialized seperately
// const bool2;
// bool2 = false;
// console.log(bool2); 
// Error: "Missing initializer in const declaration"

// const cannot be re-initialized
// const bool3 = false;
// bool3 = true;
// console.log(bool3); 
// TypeError: "Assignment to constant variable"
