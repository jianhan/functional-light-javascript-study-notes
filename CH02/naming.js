/*
 * @Author: your name
 * @Date: 2020-06-20 20:33:28
 * @LastEditTime: 2020-06-20 20:35:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /functional-light-javascript-study-notes/CH02/naming.js
 */

// one way to define a function with name property
const double = x => x * 2
console.log(double.name) // double

function triple(x) {
    return x * 3
}
console.log(triple.name) // triple

// anonymous function

function foo() {
    return () => 1
}

const fooFunc = foo()
console.log(fooFunc.name) // empty string