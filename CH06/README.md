<!--
 * @Author: your name
 * @Date: 2020-06-29 21:23:45
 * @LastEditTime: 2020-06-29 21:43:16
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