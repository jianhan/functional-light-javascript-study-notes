<!--
 * @Author: your name
 * @Date: 2020-07-03 19:43:22
 * @LastEditTime: 2020-07-03 19:52:47
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

