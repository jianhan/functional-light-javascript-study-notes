/*
 * @Author: your name
 * @Date: 2020-06-20 16:34:57
 * @LastEditTime: 2020-06-20 16:37:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /functional-light-javascript-study-notes/CH02/destructuring.js
 */


// mult return OBJ
function fooObj() {
    return { name: "Adam", age: 12 }
}

const { name, age } = fooObj()
console.log(name, age) // Adam, 12

// multi return Arr
function fooArr() {
    return [1, 2]
}

const [one, two] = fooArr();
console.log(one, two) // 1, 2