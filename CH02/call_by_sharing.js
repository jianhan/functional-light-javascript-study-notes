/*
 * @Author: your name
 * @Date: 2020-06-20 13:40:31
 * @LastEditTime: 2020-06-20 13:42:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /functional-light-javascript-study-notes/CH01/call_by_sharing.js
 */
const x = [1, 2, 3]
const y = x
console.log(x === y)

function foo(y) { console.log(y === x) }
foo(x)