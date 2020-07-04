<!--
 * @Author: your name
 * @Date: 2020-07-03 19:43:22
 * @LastEditTime: 2020-07-04 22:04:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /functional-light-javascript-study-notes/CH08/README.md
--> 

## Recursion

### Overall
1. Recursion is one of those programming techniques that most developers admit can be very powerful, but also most of them don’t like to use it
2. As a matter of fact, recursion is one of the most important ways that FP developers avoid imperative looping and reassignment, by offloading the implementation details to the language and engine
3. When used properly, recursion is powerfully declarative for complex problems

### Definition
Recursion is when a function calls itself, and that call does the same, and this cycle
continues until a base condition is satisfied and the call loop unwinds

### Types of Recursions

#### Binary Recursion
Function calls itself recursively twice, which is typically referred to as binary recursion.
~~~javascript
function fib(n) {
    if (n <= 1) return n;
    return fib( n - 2 ) + fib( n - 1 );
}
~~~

#### Mutual Recursion
When two or more functions call each other in a recursive cycle, this is referred to as mutual recursion.
~~~javascript
function isOdd(v) {
    if (v === 0) return false;
    return isEven( Math.abs( v ) - 1 );
}
function isEven(v) {
    if (v === 0) return true;
    return isOdd( Math.abs( v ) - 1 );
}
~~~

### Why Recursion
1. Recursion is most useful when the problem requires conditional branching and back-tracking, and managing that kind of state in a purely iterative environment can be quite tricky
2. Tracking each level of branching as its own scope on the call stack often significantly cleans up the readability of the code.
3. FPers will often prefer to avoid reassignment of local variables where it’s possible to avoid

### Declarative Recursion
1. When we can make the recursive definition more apparent even in the function signature, we improve the declarativeness of the function
~~~javascript
function maxEven(num1,...restNums) {
    var maxRest = restNums.length > 0 ?
        maxEven( ...restNums ) :
        undefined;
    return (num1 % 2 != 0 || num1 < maxRest) ? maxRest : num1;
}
~~~
