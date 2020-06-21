/*
 * @Author: your name
 * @Date: 2020-06-21 17:36:34
 * @LastEditTime: 2020-06-21 17:42:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /functional-light-javascript-study-notes/CH03/unary.js
 */

// the helper unary ignore any input other than the very first one

// arrow function version
const unary = fn => arg => fn(arg)

// named function version
function unaryNamed(fn) {
    return function onlyOneARg(arg) {
        return fn(arg)
    }
}

const input = ['1', '2', '3']

const invalidOutput = input.map(parseInt)
console.log(invalidOutput) // [1, NaN, NaN]

const validOutput = input.map(unaryNamed(parseInt))
console.log(validOutput)

const valid = input.map(unary(parseInt))
console.log(valid)