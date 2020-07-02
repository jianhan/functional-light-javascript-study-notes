<!--
 * @Author: your name
 * @Date: 2020-06-30 19:07:19
 * @LastEditTime: 2020-07-02 19:24:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /functional-light-javascript-study-notes/CH07/README.md
--> 
## Chapter 7: Closure vs. Object

### Similarities

1. A programming language without closures can simulate them with objects instead.
2. A programming language without objects can simulate them with closures instead.
3. Closures and objects as two different representations of a thing.

### Encapsulation
It’s not just that objects and closures represent ways to express collections of state, but also that they can include behavior via functions/methods

**Closure**
~~~javascript
function person(name,age) {
    return happyBirthday(){
        age++;
        console.log(
            `Happy ${age}th Birthday, ${name}!`
        );
    }
}
var birthdayBoy = person( "Kyle", 36 );
birthdayBoy(); // Happy 37th Birthday, Kyle!
~~~

**Object**
~~~javascript
var birthdayBoy = {
    name: "Kyle",
    age: 36,
    happyBirthday() {
        this.age++;
        console.log(`Happy ${this.age}th Birthday, ${this.name}!`);
    }
};
birthdayBoy.happyBirthday();
// Happy 37th Birthday, Kyle!
~~~

### Relationship
1. a closure associates a single function with a set of state, whereas an object holding the same state can have any number of functions to operate on that state.
2. they’re actually just different implementation variations of the same program behavior.

### (Im)mutability
Both forms have identical mutation behavior, because this is a characteristic of the value itself, regardless of where or how it’s assigned

### Isomorphsim

#### Definition in context of javascript: refer to code that can be used/shared in both the server and the client side.
#### General Notion: The general notion of isomorphism is that you have two things which are similar in structure but not the same.

Two values are equal if they’re exactly identical in all ways, but they are isomorphic if they are represented differently but still have a
1-to-1, bi-directional mapping relationship

Closures and objects are isomorphic representations of state (and its associated functionality

### Structural Mutability
1. Conceptually, the structure of a closure is not mutable.
2. Objects by default are quite mutable.

### Visibility
1. One of the advantages of managing state as public properties on an object is that it’s easier to enumerate (and iterate!) all the data in your state
2. The visibility of an object’s state data makes using it more straightforward, whereas closure obscures the state making us work harder to process it

### Change Control
1. where to allow reassignment but restrict its surface area, closures are a more convenient and flexible form than objects.
2. where no reassignment, a frozen object is a lot more convenient than repeating const declarations all over my function.
3. Many FPers take a hard-line stance on reassignment: it shouldn’t be used
4. Sometimes variable reassignment can be quite useful, and when used appropriately, quite readable in its explicitness. It’s certainly been my experience that debugging is a lot
easier when you can insert a debugger or breakpoint, or track a watch expression.

### Cloning State
1. One of the best ways we prevent side effects from eroding the predictability of our code is to make sure we treat all state values as immutable, regardless of whether they are actually immutable (frozen) or not
2. Duplicate Array Native Way: only works one level
~~~javascript
var a = [ 1, 2, 3 ];
var b = [...a];
b.push( 4 );
a; // [1,2,3]
b; // [1,2,3,4]
~~~
3. Duplicate Object Native Way: only works one level
~~~javascript
var o = {
    x: 1,
    y: 2
};
// in ES2018+, using object spread:
var p = { ...o };
p.y = 3;
// in ES6/ES2015+:
var p = Object.assign( {}, o );
p.y = 3;
~~~
4. Objects have a clear advantage when it comes to representing state that we need to be able to clone.
