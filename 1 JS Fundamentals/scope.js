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

