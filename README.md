# functional-light-javascript-study-notes

## Chapter 2: The Nature Of Functions

### Mathematical Functions

* A function always takes input(s), and always gives an output
* Morphism: a set of values that maps to another set of values, input(s) map to output(s)

### Function Input
* Argument  = an actual value passed into the function
* Parameter = the variable that is in declaration of the function

### Counting Input
1. Arity = 1 (Unary), Arity = 2 (Binary), Arity >= 3 (N-ary)
2. Every function has argument variable, this is meta data, array like
3. Never access arguments positionally, like arguments[1] . Stick to arguments.length only, and only if you must.
4. If you really want to design a function that can account for an arbitrary number of arguments to be passed in, use ...args, spread operator

#### Function Environment

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