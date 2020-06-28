<!--
 * @Author: your name
 * @Date: 2020-06-25 22:09:49
 * @LastEditTime: 2020-06-28 11:51:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /functional-light-javascript-study-notes/CH05/README.md
--> 

## Chapter 5: Reducing Side Effects

1. In FP, we should aim to reduce as much side effect as possible
2. Also should control side effect by separating the pure from impure, so side effect can be managed easier

### Free Variable
When a function makes a reference to a variable outside itself, this is called a free variable. Not all free variable references will be bad, but we’ll want
to be very careful with them. For instance a function reference a free variable Math.PI, it still pure because PI never change.

### Side Effect and Readability
The readability of a side effecting function is worse because it requires more reading to understand the program.

### Side Cause
Side cause is a function's output not only depended on the input, but also depended on a free variable it reference to.
~~~javascript
function foo(x) {
    return x + y;
}
var y = 3;
foo(1); // output 4
y = 5
foo(1); // output 6
~~~
So the same input value 1 for foo function has different output, depended on the value y, the state of y is side cause of function foo.

To aid readability, all of the causes that will contribute to determining the effect output of foo(..) should be made as direct and obvious inputs to foo(..) . The
reader of the code will clearly see the cause(s) and effect.

### Randomness
Randomness is a side cause. A function that uses Math.random() cannot have predictable output based on its input.

We can deal with it by pseudo-random algorithms for generation. These algorithms calculate long streams of numbers, but the secret is, the sequence is actually predictable if you know the starting point. This starting point is referred to as a seed.

### I/O Effects
The most common (and essentially unavoidable) form of side cause/effect is input/output (I/O)

A program with no I/O is totally pointless, because its work cannot
be observed in any way. Useful programs must at a minimum have output, and many
also need input. Input is a side cause and output is a side effect.

### Idempontence

#### Mathematical Idempotence
Idempotence means an operation whose output won’t ever change after the first call, if you feed that output back into the operation
over and over again. foo(x) == foo(foo(x)) == foo(foo(foo(x))) ,etc.. For instance Math.abs function

#### Programming Idempotence
The result of calling f(x) subsequent times after the first call doesn’t change anything.

#### When to Apply
It won’t always be possible to define your operations on data in an idempotent way,
but if you can, it will definitely help reduce the chances that your side effects will
crop up to break your expectations when you least expect it


### Pure Function

#### Definition 1: A function with no side causes/effects is called a pure function.
a pure function can reference free variables, as long as those free variables aren’t side causes.

#### Definition 2: given the same input(s), it always produces the same output

#### Composition of a pure function with an impure function always produces an impure function

#### Purity
Purity is about confidence. But we have to admit that in many cases, any confidence
we feel is actually relative to the context of our program and what we know
about it. In practice (in JavaScript) the question of function purity is not about being
absolutely pure or not, but about a range of confidence in its purity.

The more pure, the better. The more effort you put into making a function pure(r),
the higher your confidence will be when you read code that uses it, and that will
make that part of the code more readable

#### Referential Transparency
Referential transparency is the assertion that a function call could be replaced by its
output value, and the overall program behavior wouldn’t change. In other words, it
would be impossible to tell from the program’s execution whether the function call
was made or its return value was inlined in place of the function call.

#### Why Referential Transparency Important
The notion that a referentially transparent pure function can be replaced with its
output does not mean that it should literally be replaced. Far from it.

The reasons we build functions into our programs instead of using pre-computed
magic constants are not just about responding to changing data, but also about
readability with proper abstractions.

### Deal With Side Effect
1. shift the side effects out of a function to the part of the program where the call of that function happen.
2. If the nature of the concerned side causes/effects is with lexical free variables, and you have the option to modify the surrounding code, you can encapsulate them using scope

the purity of a function is judged from the outside, regardless of what goes on inside. As long as a function’s usage behaves pure, it is pure. Inside
a pure function, impure techniques can be used – in moderation!
