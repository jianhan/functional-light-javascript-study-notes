/*
 * @Author: your name
 * @Date: 2020-06-20 16:26:31
 * @LastEditTime: 2020-06-20 16:55:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /functional-light-javascript-study-notes/CH02/spread.js
 */


function fooArr([x, y, ...args] = []) {
    console.log(x, y, args)
    // x = Apple, y = Banana, c = ['Cherry']
}

fooArr(['Apple', 'Banana', 'Cherry'])

function fooObj({ name, age } = {}) {
    // name = adam, age = 20
    console.log(name, age)
}

fooObj({ name: "Adam", age: 20 })

// Array example mutation with value types
function arrMutationValueTypes(arr) {
    arr[0] = 100;
}

const inputArr = [1, 2, 3]
arrMutationValueTypes(inputArr)
console.log('after arrMutationValueTypes call:', inputArr) // [100, 2, 3]

// Array example mutation with reference type
function arrMutationReferenceTypes(arr) {
    arr[0].name = "Charlie"
}
const persons = [{ name: "Adam" }]
arrMutationReferenceTypes(persons)
console.log('after arrMutationReferenceTypes call:', persons) // [{ name: "Charlie" }]

// ... example, notice how for value types, the array will not be mutated
function spreadNotMutateArr(...numbers) {
    numbers[0] = 100
    return numbers
}
const ns = [1, 2, 3]
const resultNumber = spreadNotMutateArr(...ns)
console.log('after spreadNotMutateArr call:', ns, resultNumber) // [ 1, 2, 3 ] [ 100, 2, 3 ]

// ... example array of reference types, notice how references within array still got mutated
function spreadNotMutateArrRef(...students) {
    students[0].name = "Charlie"
}
const students = [{ name: "Adam" }]
spreadNotMutateArrRef(...students)
console.log('after spreadNotMutateArrRef call:', students)