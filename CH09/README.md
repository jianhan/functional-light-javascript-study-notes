<!--
 * @Author: your name
 * @Date: 2020-07-07 21:01:03
 * @LastEditTime: 2020-07-08 20:07:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /functional-light-javascript-study-notes/CH09/README.md
--> 
## List Operations

### Operators
1. map(..), filter(..), and reduce(..). In JavaScript, these utilities are typically used as methods on the array (aka, “list”) prototype, so we would naturally refer to them as array or list operations
2. Some of the most important FP value in understanding list operations comes from being able to model a sequence of tasks
3. a series of statements that wouldn’t otherwise look like a list – as a list operation instead of performing them individually
4. By chaining and/or composing list operations together, the intermediate results are tracked implicitly and largely protected from these hazards

### Non-FP List Processing
These operations will not be covered here, because they are not consistent with general FP best practices
1. forEach
2. some
3. every

### Map
1. one of the most basic and fundamental: map(..)
2. A mapping is a transformation from one value to another value
3. important to note that we’re not talking about mapping transformation as implying in-place mutation or reassignment;
4. we’re looking at how mapping transformation projects a new value from one location to the other
~~~javascript
function map(mapperFn,arr) {
    var newList = [];
    for (let [idx,v] of arr.entries()) {
        newList.push(
            mapperFn( v, idx, arr )
        );
    }
    return newList;
}
~~~
5. this based coding should generally be avoided wherever possible in terms of being consistent with the best practices of FP

### Mapping vs. Eaching
1. map(..) returns the array so you can keep chaining more operations after it
2. the return value of forEach(..) is undefined

### Functors
1. A functor is a value that has a utility for using an operator function on that value, which preserves composition
2. Functors = mappable
3. a functor uses the operator function on each individual value
4. The map(..) function takes its associated value (an array) and a mapping function (the operator function), and executes the mapping function for each individual value in
the array. Finally, it returns a new array with all the newly mapped values in it.

### Filter
#### The Confusion
1. The most common interpretation of filtering – outside of programming, anyway – is that you filter out unwanted stuff
2. In programming, we have essentially flipped this semantic to be more like filtering in wanted stuff

#### What it is
1. The filter(..) list operation takes a function to decide if each value in the original array should be in the new array or not. This function needs to return true if a
value should make it, and false if it should be skipped
2. true/false for this kind of decision making goes by the special name: predicate function

#### Implementation
~~~javascript
function filter(predicateFn,arr) {
    var newList = [];
    for (let [idx,v] of arr.entries()) {
        if (predicateFn( v, idx, arr )) {
            newList.push( v );
        }
    }
    return newList;
}
~~~

### Filtering-Out & Filtering-In
~~~javascript
var filterIn = filter;
function filterOut(predicateFn,arr) {
    return filterIn( not( predicateFn ), arr );
}
~~~
Using filterIn(..) and filterOut(..) (known as reject(..) in Ramda) will make your code a lot more readable than just using filter(..) and leaving the semantics conflated and confusing for the reader.

### Reduce
1. (reduce(..)) combines (aka “reduces”) the values of a list down to a single finite (non-list) value, like a number or string
2. reduce(..) is one of the most important FP tools; it’s like a Swiss Army all-in-one knife with all its usefulness.
3. A combination/reduction is abstractly defined as taking two values and making them into one value
4. Some FP contexts refer to this as “folding”, as if you’re folding two values together into one value
5. How reduce process the data: numbers will typically be combined through arithmetic, strings through concatenation, and functions through composition

#### Initial Value
1. Sometimes a reduction will specify an initialValue and start its work by combining it with the first value in the list, cascading down through each of the rest of the values in the list
2. Alternatively, you can omit the initialValue in which case the first value of the list will act in place of the initialValue and the combining will start with the second value in the list

#### Reducer
1. The function you pass to reduce(..) to perform the reduction is typically called a reducer

#### Compose Function
~~~javascript
const compose = (...funcs) => v => funcs.reduceRight((accumulator, currentFunc) => currentFunc(accumulator), v)
~~~