<!--
 * @Author: your name
 * @Date: 2020-06-29 21:23:45
 * @LastEditTime: 2020-06-29 22:36:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /functional-light-javascript-study-notes/CH06/README.md
--> 
## Immutability

### Primitive Immutability
Values of the primitive types (number, string, boolean, null, and undefined) are already immutable; there’s nothing you can do to change them

### Value Immutability
Common misconceptions about value immutability
1. Value immutability does not mean we can’t have values change over the course of our program
2. It also doesn’t mean that our variables can’t hold different values

**Value immutability**
Means that when we need to change the state in our program, we must create and track a new value rather than mutate an existing value.

### Non-Local
1. Non-primitive values are held by reference, and when passed as arguments, it’s the reference that’s copied, not the value itself.
2. If passed as arguments, non-primitive values become non-local

### Reassignment
**Constant: A variable that cannot be reassigned**
A constant actually has nothing to do with the value, except to say that whatever value a constant holds, that
variable cannot be reassigned any other value. 

**Immutable !== Nonassignable**
Const just means not assignable, does NOT mean not immutable

### Freeze
There’s a cheap and simple way to turn a mutable object/array/function into an “immutable value”
1. It goes through all the properties/indices of an object/array and marks them as read-only, so they cannot be reassigned. (Declare properties with const)
2. Top level only

### Performance
1. If we have to reallocate a new array each time we need to add to it, that’s not only churning CPU time and consuming extra memory
2. The old values (if no longer referenced) are also being garbage collected. That’s even more CPU burn
**It depend on the situation to apply immutability**
3. Key takeaway, use existing library which has performance optimized already, such as Immutable.js

### Treatment
1. Treat all received values as immutable to avoid side effects and remain pure – regardless of whether they are or not
2. Built in methods which does not mutate original value: map, filter, reduce, reduceRight
3. Built in methods does mutate: splice, pop, push, shift, unshift, reverse, sort and fill - not forbidden but use with care
4. But never use such a method on an array value that is not already local to the function you’re working in, to avoid creating a side effect on some other remote part of the code.
5. Key takeaway: Be disciplined and always treat received values as immutable, whether they are or not. That effort will improve the readability and trustability of your code.