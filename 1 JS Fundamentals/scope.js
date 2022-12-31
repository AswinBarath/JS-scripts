// Scope: var VS let VS const

// Types of Scopes:
// Globol or Root Scope
// Functional Scope
// Block Scope

// Example 1:-

// >---- Global Scope ----
var print = "greetings";
function printFunction() {
    // >---- Function Scope ----
    var hello = "greetings again";
    console.log(hello);
    // ----- Function Scope --->
}
console.log(print); // greetings
console.log(hello); // ReferenceError: "hello is not defined"
// ----- Global Scope ---->

// Example 2:-

var a = 70;
{
    let a = 3;
    var b = 10;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);
