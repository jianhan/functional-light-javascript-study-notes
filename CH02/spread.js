/*
 * @Author: your name
 * @Date: 2020-06-20 16:26:31
 * @LastEditTime: 2020-06-20 16:29:00
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