<!--
 * @Author: your name
 * @Date: 2020-07-07 21:01:03
 * @LastEditTime: 2020-07-07 21:22:01
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
