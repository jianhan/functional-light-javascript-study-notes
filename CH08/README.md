<!--
 * @Author: your name
 * @Date: 2020-07-03 19:43:22
 * @LastEditTime: 2020-07-04 22:16:17
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
2. Not all problems are cleanly recursive. This is not some silver bullet that you should try to apply everywhere

### Stack
1. Each function call sets aside a small chunk of memory called a stack frame
2. The stack frame holds certain important information about the current state of processing statements in a function, including the values in any variables
3. The reason this information needs to be stored in memory (in a stack frame) is because the function may call out to another function, which pauses the current function. When the
other function finishes, the engine needs to resume the exact state from when it was paused

### Tail Calls
1. The idea is that if a call from function baz() to function bar() happens at the very end of function baz()’s execution – referred to as a tail call – the stack frame for
baz() isn’t needed anymore. That means that either the memory can be reclaimed, or even better, simply reused to handle function bar()’s execution
2. Tail calls really shine in the recursion case, because it means that a recursive stack could run “forever”, and the only performance concern would be computation, not fixed memory limitations. Tail call recursion can run in O(1) fixed memory usage
3. Technically, tail calls themselves are not a performance optimization as most people would think, as they might actually run slower than normal calls. TCO is about optimizing tail calls to run more efficiently

### Proper Tail Calls (PTC)
1. JavaScript has never required (nor forbidden) tail calls, until ES6. ES6 mandates recognition of tail calls, of a specific form referred to as Proper Tail Calls (PTC),
and the guarantee that code in PTC form will run without unbounded stack memory growth.
2. Need strict mode
3. Not PTC
~~~javascript
foo();
return;
// or
var x = foo( .. );
return x;
// or
return 1 + foo( .. );
~~~
4. Binary (or multiple) recursion – as shown earlier, two (or more!) recursive calls made at each level – can never be fully PTC as-is, because only one recursive call can appear
in PTC position.

