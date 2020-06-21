# functional-light-javascript-study-notes

## Chapter 2: The Nature Of Functions

### Mathematical Functions

* A function always takes input(s), and always gives an output
* Morphism: a set of values that maps to another set of values, input(s) map to output(s)

### Function Input
* Argument  = an actual value passed into the function
* Parameter = the variable that is in declaration of the function

1. Arity = 1 (Unary), Arity = 2 (Binary), Arity >= 3 (N-ary)
2. Every function has argument variable, this is meta data, array like
3. Never access arguments positionally, like arguments[1] . Stick to arguments.length only, and only if you must.
4. If you really want to design a function that can account for an arbitrary number of arguments to be passed in, use ...args, spread operator
5. Avoid variadic function where possible, in FP, always prefer point free style, or one input one output.
6. ... operator make the code more declarative when destructuring
~~~javascript
// name the first and second argument in array, the rest can be arbitrary
// declarative style with ... destructuring
function foo([x,y, ...args] = []) {
    // ...
}

// imperative style
function foo(params) {
    var x = params[0];
    var y = params[1];
    var args = params.slice( 2 );
// ..
}

function foo( {x,y} = {} ) {
    console.log( x, y );
}
foo({y: 3});
~~~
7. Strive for declarative, self-explanatory code
8. Named arguments are much more flexible, and attractive from a readability perspective, especially when the function in question can take three, four, or more inputs.
9. When a function accept an array, if using spread operator, it will prevent the original array be mutated, since it will spread each element individually within the array
and assign to the function parameter

### Function Output
1. Every function have output, no return = return = return undefined, they all return the value, undefined
2. A function can return multiply values, (return values in array or object), and then destructuring 
3. Early return: sometimes is good but by no means all the time, whatever is the most explicit way of writing the code is the more appropriate way

### Higher Order Function
* A function that either takes functions as arguments or returns a function (or both) is referred to as a “higher-order” function.
* Foundational building block for FP

#### Combinators
Higher-order pure functions that take only functions as arguments and return a function.

#### Function Decorator
A function decorator is a higher-order function that takes one function as an argument, returns another function, and the returned function is a variation of the argument function

#### Closure
* What is it: Closure is when a function remembers and accesses variables from outside of its own scope, even when that function is executed in a different scope
* How it works: when inner function reference a variable from outer scope, AKA have closure over outer scope variable, it will keep it alive for as lone as the inner function stay
around, like a live link.
* This behavior is what makes functional programming powerful, also is the foundation for how higher order function works.

#### Naming Function (this is subjective, not a concrete rule)
Anonymous function are convenient to write, but do not trade easy to write for hard to read, never a good trade, when using anonymous function
think twice. Here are some of the reasons why named function can be payoff in long run:
1. Debugging: when inspecting stack trace, if "anonymous function" are all over the place, it can be hard.
2. Recursive: anonymous function can not do recursion
3. Named function normally more self-explanatory, more explicit
4. When struggling to naming a function, it could be that the purpose of the function is not clear, some refactoring and re-designing is needed. 

#### This keyword
Avoid using this keyword in FP. "this" provide a object context for functions to run.

this is an implicit parameter input for your function.
~~~javascript
function sum() {
    return this.x + this.y;
}
var context = {
    x: 1,
    y: 2
};
sum.call(context);
~~~

This code doesn’t fit with various principles of FP for a variety of reasons, but one
of the obvious hitches is the implicit this sharing.