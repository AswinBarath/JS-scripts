// Hoisiting happens on every execution context

// The actual code:
var favouriteFood = "grapes";

var foodThoughts = function() {
    console.log("Original favourite food: " + favouriteFood);

    var favouriteFood = "shushi";

    console.log("New favourite food: " + favouriteFood);
};

foodThoughts();

// After Hoisting:

// global() execution context:
var favouriteFood = undefined;
var foodThoughts = undefined;

favouriteFood = "grapes";

foodThoughts = function() {
    // function() execution context:
    var favouriteFood = undefined;

    console.log("Original favourite food: " + favouriteFood);

    favouriteFood = "shushi";

    console.log("New favourite food: " + favouriteFood);
};

foodThoughts();


// Disadvantage: Code becomes unpredictable

// Recommended to use 'let' and 'const' instead of 'var'
const favouriteFood = "grapes";

const foodThoughts = function() {
    console.log("Original favourite food: " + favouriteFood); // ReferenceError because of no hoisting

    const favouriteFood = "shushi";

    console.log("New favourite food: " + favouriteFood);
};

foodThoughts();

// ReferenceError