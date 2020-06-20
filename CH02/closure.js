/*
 * @Author: your name
 * @Date: 2020-06-20 18:17:58
 * @LastEditTime: 2020-06-20 18:28:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /functional-light-javascript-study-notes/CH02/closure.js
 */

// A simple higher order function for say hello
function sayHello() {
    return function (name) {
        console.log(`Hello ${name}`)
    }
}

const hello = sayHello()
hello("Jim") // hello Jim
hello("Bob") // hello Bob

// A simple once decorator
function once(fn) {
    let hasRan = false
    return function (num) {
        if (!hasRan) {
            hasRan = true // notice here, this is a live link since inner function has closure variable hasRan 
            const result = fn(num)
            console.log('hasRan: ', hasRan, 'result:', result)
            return result
        } else {
            console.log('hasRan is true, function already ran')
        }
    }
}

const double = x => x * 2

const doubleOnce = once(double)
doubleOnce(10)
doubleOnce(10)