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


### Function Environment

**Function Environment**

1. Every time a function invoked (applied to zero or more arguments), like a dictionary with key value pair, the key is parameter, value is argument.

2. When javascript bind a value to a name, it makes a copy of the value and place it into environment.

3. When a value–any value–is passed as an argument to a function, the value bound in the function’s environment must be identical to the original.

~~~javascript
const double = x => x * 2 // environment is {x:2, ...}, ... represent other environment such as global one
~~~

#### Variable Types
**Value Types** such as string, boolean, number, etc..
**Reference Types** such as array, object and function


#### Call By Value
When a function is invoked, javascript evaluate the expression(s) (all values are expressions) and apply the result of it as value to function.
This when the argument passed in is value type.
~~~javascript
(function double(x) { return x * 2 })(1 + 1) // 1 + 1 was evaluated first as value, then passed into function double as argument of value 2
~~~

#### Call By Sharing
A specialization of call by value, instead of evaluate the expression to get the value, it actually make a copy of the reference and pass it into function. Since
two references point to the same value, so they are identical. For instance, the way variable assignment works are exactly the same

~~~javascript
const x = [1, 2, 3]
const y = x // true

// how y is assigned is the same as
function (value) {
    return (function (copy) { // inner function always return true
        return copy === value
    })(value)
}
~~~