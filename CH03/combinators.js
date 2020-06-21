/*
 * @Author: your name
 * @Date: 2020-06-21 20:44:54
 * @LastEditTime: 2020-06-21 20:45:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /functional-light-javascript-study-notes/CH03/combinators.js
 */

const compose = (...funcs) => v => funcs.reduceRight((accumulator, current) => current(accumulator), v)
const double = v => v * 2
const increment = v => v + 1
const doubleThenIncrement = compose(increment, double)
console.log(doubleThenIncrement(2))