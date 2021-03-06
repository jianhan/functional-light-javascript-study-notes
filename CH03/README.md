## Chapter 3: Managing Function Inputs

Point free style function is what we aiming for and this is the truly functional way of using functions.

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

### All For One
**Unary Helper**
A higher order function act as a wrapper for exiting function to ensure only one parameter can be passed, which makes the target function's arity == 1
~~~javascript
const unary = fn => arg => fn(arg) // arrow function version

function unary(fn) { // named function version
    return function onlyOneARg(arg) {
        return fn(arg)
    }
}
~~~

### One on One
**Identity Helper Function**
A unary function return whatever passed in, identity
~~~javascript
function identity(v) {
    return v;
}
// or the ES6 => arrow form
var identity = v => v;
~~~

### Unchanging One
**Constant Helper Function**
A higher order function which convert a plain value into a function just return that plain value.

Usage: when an external API required a function to be passed in, we can convert a value into a function. Like then method
in promise
~~~javascript
function constant(v) {
    return function value(){
        return v;
    };
}
// or the ES6 => form
var constant = v => () => v;

// constant version
p1.then(foo).then(constant(p2)).then(bar);

// regular version
p1.then(foo).then(() => p2).then(bar);
~~~

### Adapting Arguments to Parameters
**SpreadArgs Helper Function (apply in Rambda)**
A higher order function accepts a N-ary function to a unary function. Another way of thinking it is to wrap a function with multiply parameters into accept

one parameter which is an array.
~~~javascript
function spreadArgs(fn) {
    return function(args) {
        // this is where the higher order function spread arguments
        return fn(...args)
    }
}
// OR
const spreadArgs = fn => args => fn(...args)
~~~

**GatherArgs Helper Function (unapply in ramda)**
Opposite to the previous one, here we have a higher order function wrap a function that accept array and return a function accepts multiply args
~~~javascript
function gatherArgs(fn) {
    return function(...args) {
        return fn(args)
    }
}
~~~

### Function Combinators
Higher-order pure functions that take only functions as arguments and return a function

For instance, compose or pipe
~~~javascript
const compose = (..funcs) => v => funcs.reduceRight((accumulator, current) => current(accumulator), v)
const double = v => v * 2
const increment = v => v + 1
// take to functions, and return a new one
const doubleThenIncrement = compose(increment,double)
doubleThenIncrement(2) // 5
~~~

### Function Decorators
A function decorator is a higher-order function that takes one function as an argument, returns another function, and the returned function is a variation of the argument function
~~~javascript
function not (fn) {
    return function (argument) {
        return !fn(argument)
    }
}

function something (x) {
    return x != null
}

function nothing (x) {
    return !something(x)
}
~~~

### Partial Application
A partial application is a function which has been applied to some, but not yet all of its arguments.
**Partial Helper**
~~~javascript
function partial(fn, ...presetArgs) {
    return function partiallyApply(...laterArgs) {
        return fn(...presetArgs, ...laterArgs)
    }
}
// arrow function
const partial = (fn, ...presetArgs) => (...laterArgs) => fn(...presetArgs, ...laterArgs)
~~~

### Curry
A curried function is a function that takes multiple arguments one at a time.

### Curry VS Partial Application
1. All curried functions are partial application, not all partial applications are curried function
2. The purpose is different, curry will be used for most of the time for function composition, since composition required unary function, on the other hand, partial application
mostly used for different level of abstraction or specialization.

#### Why Currying and Partial Application Are Important
1. both currying and partial application allow you to separate in time/space (throughout your codebase) when and where separate arguments are specified.
2. Composition
3. the most important layer is specialization of generalized functions, and how such abstraction improves readability of code.
Whether you use currying or partial application, creating specialized functions from generalized ones is a powerful technique for semantic abstraction and improved readability.

### Point Free Style
Point-free style is a style of programming where function definitions do not make reference to the function’s arguments

The key thing to look for is if you have a function with parameter(s) that is/are directly passed to an inner function call.
~~~javascript
const double = x => x * 2;

// notice how the function signature for map and double is the same
[1, 2, 3].map(x => double(x))

// hence we can do it this way, -> point free
[1, 2, 3].map(double)
~~~

If your code gets harder to understand because of the hoops you have to jump through to be point-free, stop.