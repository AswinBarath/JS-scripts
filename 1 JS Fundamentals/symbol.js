/* Notes on Symbol() Data Type:
- Symbol() generates a unique value for each declaration
- Symbol() is used for debugging
- Symbol() is used for having checkpoints in code
- Symbol() is used by advanced developers
- For Ex: Symbol() is used to have two objects w/ same key and value
*/

/* MDN Mozilla Docs
Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
- Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique.
- Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object.
- That enables a form of weak encapsulation, or a weak form of information hiding.

- Every Symbol() call is guaranteed to return a unique Symbol.
- Every Symbol.for("key") call will always return the same Symbol for a given value of "key". 
- When Symbol.for("key") is called, if a Symbol with the given key can be found in the global Symbol registry, that Symbol is returned.
- Otherwise, a new Symbol is created, added to the global Symbol registry under the given key, and returned.
*/

var a = Symbol("test");
var b = Symbol("test");
console.log(a);
console.log(a.description);
console.log(b);
console.log(b.description);
console.log(a==b);
console.log(a===b);
console.log(a.description===b.description);
console.log(typeof(a));
