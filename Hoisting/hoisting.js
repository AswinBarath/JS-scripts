console.log('1-------');
console.log(teddy);
console.log(sing())
var teddy = 'bear';

// function expression
var sing2  =  function() {
    console.log('ohh la la la');
}

// function declaration
function sing() {
    console.log('ohh la la la');
}

// Exercise 2 - JS Interview Question
// Check hoisting2.js for explanation
var favouriteFood = "grapes";

var foodThoughts = function() {
    console.log("Original favourite food: " + favouriteFood);

    var favouriteFood = "shushi";

    console.log("New favourite food: " + favouriteFood);
};

foodThoughts();
// O/P
// Original favourite food: undefined
// New favourite food: shushi

// Exercise 1
console.log(a());
function a() {
    console.log('hi')
}

function a() {
    console.log('bye')
}
// O/P
// bye
// undefined

var one = undefined; // during hoisting
var one = 1;
var one = 2;

console.log(one);
// O/P
// 2